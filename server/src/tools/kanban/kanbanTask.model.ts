import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { UserGroup } from "src/groups/users-group/users-group.model";
import { Kanban } from "./kanban.model";
import { UserGroup_KanbanTask } from "./UserGroup-KanbanTask.model";

interface KanbanTaskCreationAttrs {
    kanbanId: number;
    name: string;
    deadline: string;
    urgency: string;
    statys: string;
    implementers: string[];

}

@Table({tableName: 'kanban-tasks'})
export class KanbanTask extends Model<KanbanTask, KanbanTaskCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    // @ApiProperty({example: 'group-name', description: 'Название группы'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    // @ApiProperty({example: 'This group is working on a study project', description: 'Информация о группе'})
    @Column({type: DataType.STRING})
    deadline: string;

    // @ApiProperty({example: 'This group is working on a study project', description: 'Информация о группе'})
    @Column({type: DataType.STRING})
    urgency: string;
    
    // @ApiProperty({example: 'This group is working on a study project', description: 'Информация о группе'})
    @Column({type: DataType.STRING})
    status: string;

    @ForeignKey(() => Kanban)
    @Column({type: DataType.INTEGER})
    kanbanId: number;

    @BelongsToMany(() => UserGroup, () => UserGroup_KanbanTask)
    implementers: string[];
    
}
