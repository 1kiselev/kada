import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ConnectedUserEntity } from 'src/chat/model/connected-user/connected-user.entity';
// import { ConnectedUserI } from 'src/chat/model/connected-user/connected-user.interface';
// import { UserI } from 'src/user/model/user.interface';
// import { Repository } from 'typeorm';
import { ConnectedUser } from '../../model/connected-user/connected-user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateConnectedUserDto } from '../../dto/create-connected-user.dto';

@Injectable()
export class ConnectedUserService {

  constructor(@InjectModel(ConnectedUser)
    private connectedUserRepository: typeof ConnectedUser
  ) { }

  async create(dto: CreateConnectedUserDto){
    return await this.connectedUserRepository.create(dto)
  }
  

  async findByUserGroup(user_group_id: number) {
    return this.connectedUserRepository.findAll({where: {userGroupId: user_group_id}});
  }

  async deleteBySocketId(socket_id: string) {
    return this.connectedUserRepository.destroy({where: {socketId: socket_id }})
  }

  async deleteAll() {
    await this.connectedUserRepository.destroy({
      truncate: true
    });
  }

}
