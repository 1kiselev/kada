import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../../users/users.model";
import {Group} from "../groups.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Subgroup } from "../subgroups/subgroups.model";
import { UserSubgroup } from "../subgroups/users-group-subgroups.model";
import { UserGroupRoles } from "src/roles/user-group-roles.model";
import { Kanban } from "src/tools/kanban/kanban.model";
import { KanbanTask } from "src/tools/kanban/kanbanTask.model";
import { UserGroup_KanbanTask } from "src/tools/kanban/UserGroup-KanbanTask.model";
import { UserGroup_ChatRoom } from "src/tools/chat/model/room/userGroup-chatRoom.model";
import { ChatRoom } from "src/tools/chat/model/room/room.entity";

interface createUserGroup {
    userId: number;
    groupId: number;
}

@Table({tableName: 'users_group', createdAt: false, updatedAt: false})
export class UserGroup extends Model<UserGroup> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Group)
    @Column({type: DataType.INTEGER})
    groupId: number;

    @BelongsToMany(() => Role, () => UserGroupRoles)
    roles: Role[];

    @BelongsToMany(() => Subgroup, () => UserSubgroup)
    subgroups: Subgroup[];

    @BelongsToMany(() => KanbanTask, () => UserGroup_KanbanTask)
    kanbanTasks: KanbanTask[];

    // @BelongsToMany(() => ChatRoom, () => UserGroup_ChatRoom)
    // chatRooms: ChatRoom[];
    

}