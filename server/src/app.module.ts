import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
// import { PostsModule } from './posts/posts.module';
// import { Post } from "./posts/posts.model";
// import { FilesModule } from './files/files.module';
// import { ServeStaticModule } from "@nestjs/serve-static";
import { GroupsModule } from './groups/groups.module';
import { SubgroupsModule } from './groups/subgroups/subgroups.module';
import * as path from 'path'
import { Group } from "./groups/groups.model";
import { Subgroup } from "./groups/subgroups/subgroups.model";
import { UserGroup } from "./groups/users-group/users-group.model";
import { UserSubgroup } from "./groups/subgroups/users-group-subgroups.model";
import { UserGroupRoles } from "./roles/user-group-roles.model";
import { ToolsModule } from './tools/tools.module';
import { KanbanService } from './tools/kanban/kanban.service';
import { KanbanController } from './tools/kanban/kanban.controller';
import { KanbanModule } from './tools/kanban/kanban.module';
import { AppController } from "./app.controller";
import { Kanban } from "./tools/kanban/kanban.model";
import { KanbanTask } from "./tools/kanban/kanbanTask.model";
import { UserGroup_KanbanTask } from "./tools/kanban/UserGroup-KanbanTask.model";
import { ChatModule } from "./tools/chat/chat.module";
import { UserGroup_ChatRoom } from "./tools/chat/model/room/userGroup-chatRoom.model";
import { ChatRoom } from "./tools/chat/model/room/room.entity";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        // ServeStaticModule.forRoot({
        //   rootPath: path.resolve(__dirname, 'static')
        // }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRESS_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRESS_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User, Role, UserRoles,
            Group, Subgroup, UserGroup,
            UserGroupRoles,UserSubgroup, Kanban, 
            KanbanTask, UserGroup_KanbanTask, UserGroup_ChatRoom,
            ChatRoom,  
          ],
          autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        GroupsModule,
        SubgroupsModule,
        ToolsModule,
        KanbanModule,
        ChatModule,
      ],
})
export class AppModule {}