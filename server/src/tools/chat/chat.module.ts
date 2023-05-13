import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { ChatGateway } from './gateway/chat.gateway';
import { ChatRoom } from './model/room/room.entity';
import { RoomService } from './service/room-service/room.service';
import { ConnectedUserService } from './service/connected-user/connected-user.service';
import { ConnectedUser } from './model/connected-user/connected-user.entity';
import { Message } from './model/message/message.entity';
import { JoinedRoom } from './model/joined-room/joined-room.entity';
import { JoinedRoomService } from './service/joined-room/joined-room.service';
import { MessageService } from './service/message/message.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserGroup_ChatRoom } from './model/room/userGroup-chatRoom.model';
import { UsersGroupModule } from 'src/groups/users-group/users-group.module';

@Module({
  imports: [AuthModule, UsersModule, UsersGroupModule, 
    SequelizeModule.forFeature([
      ChatRoom,
      ConnectedUser,
      Message,
      JoinedRoom,
      UserGroup_ChatRoom,
    ])
  ],
  providers: [ChatGateway, RoomService, ConnectedUserService, JoinedRoomService, MessageService]
})
export class ChatModule { }
