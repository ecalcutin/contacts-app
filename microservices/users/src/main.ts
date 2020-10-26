import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microserviceOpts: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    port: 8080
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOpts);
  await app.listen(() => { });
}
bootstrap();
