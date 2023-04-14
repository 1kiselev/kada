import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Subgroup } from "./subgroups/subgroups.model";
import { UserGroup } from "./users-group/users-group.model";
import { Kanban } from "src/tools/kanban/kanban.model";
import { ChatRoom } from "src/tools/chat/model/room/room.entity";

interface GroupCreationAttrs {
    name: string;
    description: string;
}

@Table({tableName: 'groups'})
export class Group extends Model<Group, GroupCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ApiProperty({example: 'group-name', description: 'Название группы'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'This group is working on a study project', description: 'Информация о группе'})
    @Column({type: DataType.STRING})
    info: string;

    @HasMany(() => UserGroup)
    usersGroup: UserGroup[]
    
    @HasOne(() => Kanban)
    kanbanId: number;

    @HasMany(() => Subgroup)
    subgroup: Subgroup[]

    @HasMany(() => ChatRoom)
    chatRooms: ChatRoom[]
}

// export class UsersModule {}