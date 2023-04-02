import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { Group } from '../groups.model';
import { GroupsModule } from '../groups.module';
import { UsersGroupController } from './users-group.controller';
import { UserGroup } from './users-group.model';
import { UsersGroupService } from './users-group.service';

@Module({
  controllers: [UsersGroupController],
  providers: [UsersGroupService],
  imports: [
    SequelizeModule.forFeature([Group, User, Role, UserRoles, UserGroup]),
    RolesModule, UsersModule, forwardRef(() => GroupsModule), 
    ],
  exports: [UsersGroupService],
})
export class UsersGroupModule {}
