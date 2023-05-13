import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
// import { RoomI } from 'src/chat/model/room/room.interface';
// import { UserI } from 'src/user/model/user.interface';
// import { Repository } from 'typeorm';
import { ChatRoom } from '../../model/room/room.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateChatRoomDto } from '../../dto/create-chat-room.dto';

@Injectable()
export class RoomService {

  constructor(@InjectModel(ChatRoom)
    private roomRepository: typeof ChatRoom
  ) { }

  async createRoom(dto: CreateChatRoomDto ) {
    return await this.roomRepository.create(dto)
  }

  async getRoomById(roomId: number){
    return await this.roomRepository.findByPk(roomId);
  }

  async getRoomMessages(roomId: number){
    const room = await this.roomRepository.findByPk(roomId);
    return room.messages
  }

  // async getRoomsForUser(userId: number, options: IPaginationOptions) {
  //   const query = this.roomRepository.f

  //   return paginate(query, options);
  // }

  // async addCreatorToRoom(room: RoomI, creator: UserI): Promise<RoomI> {
  //   room.users.push(creator);
  //   return room;
  // }

}
