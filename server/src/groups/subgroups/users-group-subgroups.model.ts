import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../../users/users.model";
import {Group} from "../groups.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Subgroup } from "./subgroups.model";
import { UserGroup } from "../users-group/users-group.model";


@Table({tableName: 'users_group_subgroups', createdAt: false, updatedAt: false})
export class UserSubgroup extends Model<UserSubgroup> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Subgroup)
    @Column({type: DataType.INTEGER})
    subgroupId: number;

    @ForeignKey(() => UserGroup)
    @Column({type: DataType.INTEGER})
    userId: number;

}