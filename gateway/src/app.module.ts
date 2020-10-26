import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';

import { ENV_SCHEMA } from './env.schema';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [],
      validationSchema: ENV_SCHEMA,
      expandVariables: true,
      validationOptions: {
        allowUnknow: false,
        abortEarly: true
      }
    }),
    // GraphQLModule.forRoot({
    //   playground: true
    // })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
