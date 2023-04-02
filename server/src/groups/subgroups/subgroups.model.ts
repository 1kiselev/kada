import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Group } from "../groups.model";
import { UserGroup } from "../users-group/users-group.model";
import { UserSubgroup } from "./users-group-subgroups.model";
// import { UserGroups } from "./user-groups.model";

interface UserCreationAttrs {
    name: string;
    description: string;
}

@Table({tableName: 'subgroups'})
export class Subgroup extends Model<Subgroup> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ApiProperty({example: 'subgroup-name', description: 'Название подгруппы'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'This is subgroup of frontenders', description: 'Информация о подгруппе'})
    @Column({type: DataType.STRING, allowNull: false})
    info: string;

    @ForeignKey(() => Group)
    @Column({type: DataType.INTEGER})
    groupId: number;

    @BelongsToMany(() => UserGroup, () => UserSubgroup)
    user_subgroup: UserSubgroup[]

    // @HasMany(() => Subgroup)
    // subgroup: Subgroup[]
}

export class UsersModule {}