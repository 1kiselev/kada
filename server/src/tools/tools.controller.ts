import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { KanbanService } from './kanban/kanban.service';
import { CreateTaskDto } from './kanban/dto/create-task.dto';
import { UpdateKanbanDto } from './kanban/dto/update-kanban.dto';

@Controller('tools')
export class ToolsController {
    constructor(
        private kanbanService: KanbanService
    ){}

    @Post('/kanban')
    createKanban(@Body() group_id){
        return this.kanbanService.createKanban(group_id)
    }

    @Post('/kanban/createTask')
    createTask(@Body() dto: CreateTaskDto){
        return this.kanbanService.createTask(dto)
    }

    @Post('/kanban/update')
    updateKanban(@Body() dto: UpdateKanbanDto){
        return this.kanbanService.updateKanban(dto);
    }
    @Get('/kanban/tasks')
    getTasks(@Query() params){
        return this.kanbanService.getTasks(params.id)
    }
}
