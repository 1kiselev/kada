import { Injectable } from '@nestjs/common';
import { Kanban } from './kanban.model';
import { InjectModel } from '@nestjs/sequelize';
import { KanbanTask } from './kanbanTask.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateKanbanDto } from './dto/update-kanban.dto';

@Injectable()
export class KanbanService {

    constructor(
        @InjectModel(Kanban)
        private kanbanRepository: typeof Kanban, 
        @InjectModel(KanbanTask)
        private kanbanTaskRepository: typeof KanbanTask, 
    ){}
    
    async createKanban(groupId){
        const kanban = await this.kanbanRepository.create(groupId);
        return kanban;
    }

    async getTasks(kanban_id: number){
        const tasks = this.kanbanTaskRepository.findAll( {where: { kanbanId: kanban_id }} )
        console.log(tasks)
        return tasks;
    }

    // async parseImplementers(implementers: string[]){
    //     let result: UserRoles[] =  await this.
    // }


    async createTask(dto: CreateTaskDto){
        await this.kanbanTaskRepository.create(dto)
        const tasks = this.getTasks(dto.kanbanId)
        console.log(tasks)
        return tasks;
    }

    async updateTask(data){
        const task = await this.kanbanTaskRepository.findByPk(data.id)
        if (task){
            console.log(task)
            task.deadline = data.deadline
            task.implementers = data.implementers
            task.urgency = data.urgency
            task.status = data.status
            task.save()
        }
        return
    }

    async updateKanban(dto: UpdateKanbanDto){
        const kanban = await this.kanbanRepository.findOne({where: { groupId: dto.groupId }})
        dto.data.forEach(task_data => this.updateTask(task_data))
        const tasks = await this.kanbanTaskRepository.findAll({where: { kanbanId: kanban.id }})
        return tasks
    }

}
