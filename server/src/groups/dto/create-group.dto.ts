import { ApiProperty } from "@nestjs/swagger";

export class CreateGroupDto {
    @ApiProperty({example: 'Group1', description: 'Название группы'})
    readonly name: string;
    @ApiProperty({example: 'This group is working on a study project', description: 'Описание группы'})
    readonly description: string;
    @ApiProperty({example: '2', description: 'id пользователя, создающего группу'})
    readonly creator_id: number;
}