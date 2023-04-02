import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/user-roles.model';
import { SubgroupsController } from './subgroups.controller';
import { Subgroup } from './subgroups.model';
import { SubgroupsService } from './subgroups.service';
import { UserSubgroup } from './users-group-subgroups.model';

@Module({
  controllers: [SubgroupsController],
  providers: [SubgroupsService],
  imports: [
    SequelizeModule.forFeature([Subgroup, Role, UserSubgroup, UserRoles]),
    RolesModule,
    ]
})
export class SubgroupsModule {}
