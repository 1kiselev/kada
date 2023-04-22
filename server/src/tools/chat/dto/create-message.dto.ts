export class CreateMessageDto{
    readonly id: number;
    readonly text: string;
    readonly userGroupId: number;
    readonly chatRoomId: number;
}