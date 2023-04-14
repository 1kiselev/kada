import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { KanbanTask } from "./kanbanTask.model";
import { UserGroup } from "src/groups/users-group/users-group.model";



@Table({tableName: 'user_group-kanban_task', createdAt: false, updatedAt: false})
export class UserGroup_KanbanTask extends Model<UserGroup_KanbanTask> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => KanbanTask)
    @Column({type: DataType.INTEGER})
    kanbanTaskId: number;

    @ForeignKey(() => UserGroup)
    @Column({type: DataType.INTEGER})
    userGroupId: number;

}