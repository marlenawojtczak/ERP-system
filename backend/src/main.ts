import { existsSync, mkdirSync } from 'fs';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder();
  config.setTitle('ERP-system API');
  config.setDescription('ERP-system API');
  config.setVersion('1.0');
  config.addBearerAuth();
  config.build();

  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api', app, document);

  const uploadsFolderPath = './uploads';

  if (!existsSync(uploadsFolderPath)) {
    mkdirSync(uploadsFolderPath);
  }

  await app.listen(3000);
}
bootstrap();
