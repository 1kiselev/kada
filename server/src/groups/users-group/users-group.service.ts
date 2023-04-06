import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { UsersService } from 'src/users/users.service';
import { GroupsService } from 'src/groups/groups.service';
import { CreateUserGroupDto } from './dto/create-user-group.dto';
import { UserGroup } from './users-group.model';
import { Inject } from '@nestjs/common/decorators';
import { forwardRef } from '@nestjs/common/utils';

@Injectable()
export class UsersGroupService {
    constructor(@InjectModel(UserGroup)
    private userGroupRepository: typeof UserGroup,
    @Inject(forwardRef(() => GroupsService))
    private groupService: GroupsService,
    private roleService: RolesService,
    private userService: UsersService,
    ){}

    async createUserGroup(dto: CreateUserGroupDto){
        const userGroup = await this.userGroupRepository.create(dto);
        const user = await this.userService.getUserByEmail(dto.user_email);
        const group = await this.groupService.getGroupById(dto.group_id);
        user.$add('usersGroup', [userGroup.id]);
        group.$add('usersGroup', [userGroup.id]);
        return userGroup;
    }

    async getUserGroupById(id){
        return await this.userGroupRepository.findByPk(id);
    }



}
