import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Group } from "src/groups/groups.model";
import { UserGroup } from "src/groups/users-group/users-group.model";
import { KanbanTask } from "./kanbanTask.model";

interface KanbanCreationAttrs {
    groupId: number;
}

@Table({tableName: 'kanbans'})
export class Kanban extends Model<Kanban, KanbanCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    // @ApiProperty({example: 'group-name', description: 'Название группы'})
    
    @ForeignKey(() => Group)
    groupId: number;

    @HasMany(() => KanbanTask)
    tasks: KanbanTask[]
    
}
