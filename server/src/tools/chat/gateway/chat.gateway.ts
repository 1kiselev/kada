import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage,
   WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { AuthService } from 'src/auth/auth.service';
import { Socket, Server } from 'socket.io';
import { OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { RoomService } from '../service/room-service/room.service';
import { PageI } from '../model/page.interface';
import { ConnectedUserService } from '../service/connected-user/connected-user.service';
import { JoinedRoomService } from '../service/joined-room/joined-room.service';
import { MessageService } from '../service/message/message.service';
import { UsersService } from 'src/users/users.service';
import { UsersGroupService } from 'src/groups/users-group/users-group.service';
import { CreateChatRoomDto } from '../dto/create-chat-room.dto';
import { CreateJoinedRoomDto } from '../dto/create-joined-room.dto';
import { CreateMessageDto } from '../dto/create-message.dto';

// ['https://hoppscotch.io', 'http://localhost:3000', 'http://localhost:4200']
// @WebSocketGateway({ cors: { origin: 'localhost:5000' } })
@WebSocketGateway({ cors: { origin: ['http://localhost:5000'] } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {

  @WebSocketServer()
  server: Server;

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private userGroupsService: UsersGroupService,
    private roomsService: RoomService,
    private connectedUsersService: ConnectedUserService,
    private joinedRoomsService: JoinedRoomService,
    private messagesService: MessageService) { }

  async onModuleInit() {
    await this.connectedUsersService.deleteAll();
    await this.joinedRoomsService.deleteAll();
  }

  async handleConnection(socket: Socket) {
    try {
      // const decodedToken = await this.authService.verifyJwt(socket.handshake.headers.authorization);
      // const user: UserI = await this.userService.getOne(decodedToken.user.id);
      const user = await this.usersService.getUserByEmail(socket.handshake.headers.authorization) // !!!!!!!!!!1
      
      if (!user) {
        console.log('AAAAAAAAA')
        return this.disconnect(socket);
      } else {
        const userGroup = await this.userGroupsService.getUserGroupByEmail(user.email, Number(socket.handshake.headers.groupid));
        // const userGroup = user.usersGroup.find(ug => ug.groupId === Number(socket.handshake.headers.groupid))
        socket.data.user = user;
        socket.data.userGroup = userGroup;
        console.log('\n\n', userGroup,  )
        // const rooms = await this.roomService.getRoomsForUser(user.id, { page: 1, limit: 10 });
        const rooms = await this.userGroupsService.getUsersChatRooms(userGroup.id)
        // substract page -1 to match the angular material paginator
        // rooms.meta.currentPage = rooms.meta.currentPage - 1;
        // Save connection to DB
        await this.connectedUsersService.create({ socketId: socket.id, userGroupId: userGroup.id });
        // Only emit rooms to the specific connected client
        return this.server.to(socket.id).emit('rooms', rooms);
      }
    } catch(e) {
      console.log('\n\n111111111111\n\n',e)
      return this.disconnect(socket);
    }
  }

  async handleDisconnect(socket: Socket) {
    // remove connection from DB
    await this.connectedUsersService.deleteBySocketId(socket.id);
    socket.disconnect();
  }

  private disconnect(socket: Socket) {
    socket.emit('Error', new UnauthorizedException());
    socket.disconnect();
  }

  @SubscribeMessage('createRoom')
  async onCreateRoom(socket: Socket, dto: CreateChatRoomDto) {
    const createdRoom = await this.roomsService.createRoom(dto);

    for (const user of createdRoom.users) {
      const connections = await this.connectedUsersService.findByUserGroup(user.id);
      const rooms = await this.userGroupsService.getUsersChatRooms(user.id);
      // substract page -1 to match the angular material paginator
      // rooms.meta.currentPage = rooms.meta.currentPage - 1;
      for (const connection of connections) {
        await this.server.to(connection.socketId).emit('rooms', rooms);
      }
    }
  }

  // @SubscribeMessage('paginateRooms')
  // async onPaginateRoom(socket: Socket, page: PageI) {
  //   const rooms = await this.roomService.getRoomsForUser(socket.data.user.id, this.handleIncomingPageRequest(page));
  //   // substract page -1 to match the angular material paginator
  //   rooms.meta.currentPage = rooms.meta.currentPage - 1;
  //   return this.server.to(socket.id).emit('rooms', rooms);
  // }

  @SubscribeMessage('joinRoom')
  async onJoinRoom(socket: Socket, dto: CreateJoinedRoomDto) {
    const messages = await this.roomsService.getRoomMessages(dto.roomId)
    // messages.meta.currentPage = messages.meta.currentPage - 1;
    // Save Connection to Room
    await this.joinedRoomsService.create(dto);
    // Send last messages from Room to User
    await this.server.to(socket.id).emit('messages', messages);
  }

  @SubscribeMessage('leaveRoom')
  async onLeaveRoom(socket: Socket) {
    // remove connection from JoinedRooms
    await this.joinedRoomsService.deleteBySocketId(socket.id);
  }

  @SubscribeMessage('addMessage')
  async onAddMessage(socket: Socket, dto: CreateMessageDto) {
    const createdMessage = await this.messagesService.create(dto)
    const room = await this.roomsService.getRoomById(dto.chatRoomId);
    const joinedUsers = await this.joinedRoomsService.findByRoomId(dto.chatRoomId);
    // TODO: Send new Message to all joined Users of the room (currently online)
    for(const user of joinedUsers) {
      await this.server.to(user.socketId).emit('messageAdded', createdMessage);
    }
  }

  private handleIncomingPageRequest(page: PageI) {
    page.limit = page.limit > 100 ? 100 : page.limit;
    // add page +1 to match angular material paginator
    page.page = page.page + 1;
    return page;
  }

}
