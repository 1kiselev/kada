import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AddRoleDto } from 'src/users/dto/add-role.dto';
import { AddUserDto } from './dto/add-user.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}

    @Post()
    createGroup(@Body() dto: CreateGroupDto){
        return this.groupsService.createGroup(dto);
    }

    @Post('/addUser')
    addUser(@Body() dto: AddUserDto){
        return this.groupsService.addUser(dto);
    }

    @Post('/addRole')
    addRole(@Body() dto: AddRoleDto){
        return this.groupsService.addRole(dto);
    }

    @Get('/users')
    getGroupUsers(@Query() params){
        return this.groupsService.getGroupUsers(params.id)
    }
    
}
