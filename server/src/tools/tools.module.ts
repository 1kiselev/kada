import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { KanbanModule } from './kanban/kanban.module';

@Module({
  controllers: [ToolsController],
  providers: [ToolsService],
  imports: [
   KanbanModule ,
  ]
})
export class ToolsModule {}
