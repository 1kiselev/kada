import { UserGroup } from "src/groups/users-group/users-group.model";
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { JoinedRoom } from "../joined-room/joined-room.entity";
import { Message } from "../message/message.entity";
import { UserGroup_ChatRoom } from "./userGroup-chatRoom.model";
import { Group } from "src/groups/groups.model";

interface ChatRoomCreationAttrs {
  name: string;
  description: string;
  creator: string;
  // users: UserGroup[];
}

@Table({tableName: 'chat-rooms'})
export class ChatRoom extends Model<ChatRoom, ChatRoomCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.STRING})
  description: string;

  @Column({type: DataType.STRING})
  creator: string;

  @BelongsToMany(() => UserGroup, () => UserGroup_ChatRoom)
  users: UserGroup[];

  @HasMany(() => JoinedRoom)
  joinedUsers: JoinedRoom[];

  @HasMany(() => Message)
  messages: Message[];

  @ForeignKey(() => Group)
  @Column({type: DataType.INTEGER})
  groupId: number;
  

}