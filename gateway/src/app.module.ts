import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ENV_SCHEMA } from './env.schema';
import { UserResolver } from './users/resolvers/user.resolver';
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
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [UserResolver],
})
export class AppModule { }
