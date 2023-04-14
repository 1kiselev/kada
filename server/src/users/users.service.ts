import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    
    constructor(@InjectModel(User) private userRepository: typeof User, 
    private roleService: RolesService){}
    
    async createUser(dto: CreateUserDto){
        console.log(dto)
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }
    
    async getAllUsers(){
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }
    
    async getUserById(id: number){
        const user = await this.userRepository.findByPk(id)
        return user;
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}} )
        return user;
    }

    async getUsersByIds(ids: Array<number>){
        return this.userRepository.findAndCountAll({ where: {id: ids} })
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save()
        return user;    
    }
    
}