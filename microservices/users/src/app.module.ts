import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from './users/users.module';

import { ENV_SCHEMA } from './env.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { async } from 'rxjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.example.env'],
      expandVariables: true,
      validationSchema: ENV_SCHEMA,
      validationOptions: {
        allowUnknow: false,
        abortEarly: true
      }
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        useCreateIndex: true
      }),
      inject: [ConfigService]
    }),
    UsersModule
  ],
})
export class AppModule { }
