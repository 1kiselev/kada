import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
// import { MessageEntity } from 'src/chat/model/message/message.entity';
// import { MessageI } from 'src/chat/model/message/message.interface';
// import { RoomI } from 'src/chat/model/room/room.interface';
// import { Repository } from 'typeorm';
import { Message } from '../../model/message/message.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMessageDto } from '../../dto/create-message.dto';

@Injectable()
export class MessageService {

  constructor(@InjectModel(Message)
    private messageRepository: typeof Message
  ) { }

  async create(dto: CreateMessageDto){
    return await this.messageRepository.create(dto)
  }

  // async findMessagesForRoom(room: RoomI, options: IPaginationOptions): Promise<Pagination<MessageI>> {
  //   const query = this.messageRepository
  //     .createQueryBuilder('message')
  //     .leftJoin('message.room', 'room')
  //     .where('room.id = :roomId', { roomId: room.id })
  //     .leftJoinAndSelect('message.user', 'user')
  //     .orderBy('message.created_at', 'DESC');

  //   return paginate(query, options);

  // }

}
