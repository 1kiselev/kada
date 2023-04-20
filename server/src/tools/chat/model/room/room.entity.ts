import { UserGroup } from "src/groups/users-group/users-group.model";
import { BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { JoinedRoomEntity } from "../joined-room/joined-room.entity";
import { MessageEntity } from "../message/message.entity";
import { UserGroup_ChatRoom } from "./userGroup-chatRoom.model";

export interface ChatRoomCreationAttrs {
  id: number;
  name: string;
  description: string;
  users: UserGroup[];
  created_at: Date;
  updated_at: Date;
}

@Table({tableName: 'rooms'})
export class ChatRoom extends Model<ChatRoom, ChatRoomCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.STRING})
  description: string;

  @BelongsToMany(() => UserGroup, () => UserGroup_ChatRoom)
  users: UserGroup[];

  @HasMany(() => JoinedRoomEntity, joinedRoom => joinedRoom.room)
  joinedUsers: JoinedRoomEntity[];

  @HasMany(() => MessageEntity, message => message.room)
  messages: MessageEntity[];

}