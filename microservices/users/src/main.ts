import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microserviceOpts: TcpOptions = {
  transport: Transport.TCP,
  options: {
    port: parseInt(process.env.MICROSERVICE_PORT, 10)
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOpts);
  await app.listen(() => { });
}
bootstrap();
