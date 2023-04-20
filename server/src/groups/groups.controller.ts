import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddRoleDto } from 'src/users/dto/add-role.dto';
import { AddUserDto } from './dto/add-user.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(
        private groupsService: GroupsService
        ) {}

    @ApiOperation({summary: 'Создать группу'})
    @ApiResponse({status: 200})
    @Post()
    createGroup(@Body() dto: CreateGroupDto){
        return this.groupsService.createGroup(dto);
    }

    @ApiOperation({summary: 'Добавить пользователя в группу'})
    @ApiResponse({status: 200})
    @Post('/addUser')
    addUser(@Body() dto: AddUserDto){
        return this.groupsService.addUser(dto);
    }

    @ApiOperation({summary: 'Выдать роль пользователю'})
    @ApiResponse({status: 200})
    @Post('/addRole')
    addRole(@Body() dto: AddRoleDto){
        return this.groupsService.addRole(dto);
    }

    @ApiOperation({summary: 'Получить список всех пользователей группы'})
    @ApiResponse({status: 200})
    @Get('/users')
    getGroupUsers(@Query() params){
        return this.groupsService.getGroupUsers(params.id)
    }

    @ApiOperation({summary: 'Получить информацию о группе'})
    @ApiResponse({status: 200})
    @Get('/info')
    getInfo(@Query() params){
        return this.groupsService.getInfo(params.id)
    }

}
