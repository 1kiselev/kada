import { UserGroup } from "src/groups/users-group/users-group.model";

export class CreateTaskDto {
    readonly kanbanId: number;
    readonly name: string;
    readonly deadline: string;
    readonly urgency: string;
    readonly status: string;
    readonly implementers: string[]; 
}