import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';

import { ENV_SCHEMA } from './env.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [],
      expandVariables: true,
      validationSchema: ENV_SCHEMA,
      validationOptions: {
        allowUnknow: false,
        abortEarly: true
      }
    }),
    UsersModule
  ],
})
export class AppModule { }
