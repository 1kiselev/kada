import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { GroupsController } from './groups.controller';
import { Group } from './groups.model';
import { GroupsService } from './groups.service';
import { UserGroup } from './users-group/users-group.model';
import { UsersGroupModule } from './users-group/users-group.module';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
  imports: [
  SequelizeModule.forFeature([Group, User, Role, UserRoles, UserGroup]),
  RolesModule, UsersModule, forwardRef(() => UsersGroupModule),
  ],
  exports: [GroupsService]
})
export class GroupsModule {}
