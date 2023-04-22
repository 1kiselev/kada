import { UserGroup } from "src/groups/users-group/users-group.model"; 
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ChatRoom } from "../room/room.entity";

interface JoinedRoomCreationAttrs {
  id: number;
  socketId: string;
  userGroupId: number;
  roomId: number;
}

@Table({tableName: 'joined-room', createdAt: false, updatedAt: false})
export class JoinedRoom extends Model<JoinedRoom, JoinedRoomCreationAttrs>{

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true})
  socketId: string;

  // @ManyToOne(() => UserEntity, user => user.joinedRooms)
  // @JoinColumn()
  // user: UserEntity;

  @ForeignKey(() => UserGroup)
  @Column({type: DataType.INTEGER})
  userGroupId: number;

  // @ManyToOne(() => RoomEntity, room => room.joinedUsers)
  // @JoinColumn()
  // room: RoomEntity;

  @ForeignKey(() => ChatRoom)
  @Column({type: DataType.INTEGER})
  chatRoomId: number;

}