import { ApiProperty } from "@nestjs/swagger";

export class AddUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'E-mail пользователя'})
    readonly user_email: string;
    @ApiProperty({example: '4', description: 'id группы'})
    readonly group_id: number;
}