import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { JoinedRoom } from '../../model/joined-room/joined-room.entity';
import { CreateJoinedRoomDto } from '../../dto/create-joined-room.dto';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
// import { JoinedRoomI } from 'src/chat/model/joined-room/joined-room.interface';
// import { RoomI } from 'src/chat/model/room/room.interface';
// import { UserI } from 'src/user/model/user.interface';
// import { Repository } from 'typeorm';

@Injectable()
export class JoinedRoomService {

  constructor(@InjectModel(JoinedRoom)
    private joinedRoomRepository: typeof JoinedRoom
  ) { }

  async create(dto: CreateJoinedRoomDto){
    return await this.joinedRoomRepository.create(dto)
  }

  // async findByUser(user: UserI): Promise<JoinedRoomI[]> {
  //   return this.joinedRoomRepository.find({ user });
  // }

  async findByRoomId(room_id: number) {
    return await this.joinedRoomRepository.findAll({where: {chatRoomId: room_id}});
  }

  async deleteBySocketId(socket_id: string) {
    return await this.joinedRoomRepository.destroy({where: {socketId: socket_id }})
  }

  async deleteAll() {
    await this.joinedRoomRepository.destroy({
      truncate: true
    });
  }

}
