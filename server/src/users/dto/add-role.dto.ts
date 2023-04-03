import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto{
    @ApiProperty({example: 'ADMIN', description: 'Название роли'})
    @IsString({message: 'Должно быть строкой'})
    readonly value: string;
    @ApiProperty({example: '3', description: 'id пользователя группы'})
    @IsNumber({}, {message: 'Должно быть числом'})
    readonly user_group_id: number;
}