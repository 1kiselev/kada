import { ChatRoom} from "../room/room.entity";
import { Model, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { UserGroup } from "src/groups/users-group/users-group.model";

interface MessageCreationAttrs {
  id: number;
  text: string;
  userGroupId: number;
  chatRoomId: number;
}


@Table({tableName: 'messages'})
export class Message extends Model<Message, MessageCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING})
  text: string;

  // @ManyToOne(() => UserEntity, user => user.messages)
  // @JoinColumn()
  // user: UserEntity;

  // @ManyToOne(() => RoomEntity, room => room.messages)
  // @JoinTable()
  // room: RoomEntity;

  @ForeignKey(() => UserGroup)
  @Column({type: DataType.INTEGER})
  userGroupId: number;
  
  @ForeignKey(() => ChatRoom)
  @Column({type: DataType.INTEGER})
  chatRoomId: number;
}