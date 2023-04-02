import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from 'src/users/dto/add-role.dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { AddUserDto } from './dto/add-user.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './groups.model';
import { CreateUserGroupDto } from './users-group/dto/create-user-group.dto';
import { UserGroup } from './users-group/users-group.model';
import { UsersGroupService } from './users-group/users-group.service';

@Injectable()
export class GroupsService {

    constructor(@InjectModel(Group)
    private groupRepository: typeof Group, 
    @InjectModel(UserGroup)
    private userGroupRepository: typeof UserGroup,
    @Inject(forwardRef(() => UsersGroupService))
    private userGroupService: UsersGroupService,
    private roleService: RolesService,
    private userService: UsersService
    ){}

    async createGroup(dto: CreateGroupDto){
        const name: string = dto.name;
        const description: string = dto.description;
        const group = await this.groupRepository.create({name, description});
        const user_id = dto.creator_id; 
        const group_id = group.id;
        const userGroup: UserGroup = await this.userGroupService.createUserGroup({ user_id, group_id })
        const value: string = 'CREATOR'
        const user_group_id = userGroup.id
        this.addRole({ value, user_group_id })
        return group;
    }


    async addUser(dto: AddUserDto){
        console.log(dto);
        const user = await this.userService.getUserByEmail(dto.user_email);
        const group = await this.groupRepository.findByPk(dto.group_id);
        if ( user && group ) {
            const user_id = user.id;
            const group_id = group.id;
            const value = "MEMBER"
            const userGroup = await this.userGroupService.createUserGroup({ user_id, group_id})
            const user_group_id = userGroup.id
            this.addRole({ value, user_group_id })
            return dto;
        }
        throw new HttpException('Пользователь или группа не найдены', HttpStatus.NOT_FOUND);
    }

    async addRole(dto: AddRoleDto){
        const userGroup = await this.userGroupService.getUserGroupById(dto.user_group_id);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && userGroup) {
            await userGroup.$add('role', role.id);
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }
    
    async getGroupById(id){
        return await this.groupRepository.findByPk(id);
    }

    async getGroupUsers(group_id: number){
        let user_ids: Array<UserGroup> = await this.userGroupRepository.findAll({ where: {groupId: group_id} })
        let users: {rows: User[]; count: number } = await this.userService.getUsersByIds(
            user_ids.map(user_group => user_group.userId)
            )
        return users
    }

    async getInfo(id){
        
    }
}
