import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
// import { ValidationPipe } from "./pipes/validation.pipe";

async function start(){
  const PORT = process.env.PORT || 500;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('kada')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Курсовая работа')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  // app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()