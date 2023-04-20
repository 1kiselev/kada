import { Module } from '@nestjs/common';
import { KanbanController } from './kanban.controller';
import { KanbanService } from './kanban.service';
import { Group } from 'src/groups/groups.model';
import { UserGroup } from 'src/groups/users-group/users-group.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Kanban } from './kanban.model';
import { KanbanTask } from './kanbanTask.model';
import { UserGroup_KanbanTask } from './UserGroup-KanbanTask.model';

@Module({ 
    controllers: [KanbanController],
    providers: [KanbanService],
    imports: [
        SequelizeModule.forFeature([Group, UserGroup, Kanban, KanbanTask, UserGroup_KanbanTask]), 
    ],
    exports: [KanbanService]})

export class KanbanModule {}
