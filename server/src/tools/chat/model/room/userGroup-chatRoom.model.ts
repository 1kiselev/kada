
import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { UserGroup } from "src/groups/users-group/users-group.model";
import { ChatRoom } from "./room.entity";




@Table({tableName: 'user_group-chat_room', createdAt: false, updatedAt: false})
export class UserGroup_ChatRoom extends Model<UserGroup_ChatRoom> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => ChatRoom)
    @Column({type: DataType.INTEGER})
    chatRoomId: number;

    @ForeignKey(() => UserGroup)
    @Column({type: DataType.INTEGER})
    userGroupId: number;
}

