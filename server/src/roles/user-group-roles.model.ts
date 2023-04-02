import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Role} from "./roles.model";
import { UserGroup } from "src/groups/users-group/users-group.model";



@Table({tableName: 'user_group_roles', createdAt: false, updatedAt: false})
export class UserGroupRoles extends Model<UserGroupRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => UserGroup)
    @Column({type: DataType.INTEGER})
    userId: number;

}