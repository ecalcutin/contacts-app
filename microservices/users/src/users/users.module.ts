import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

import { UserRef, UserSchema } from "./schemas";


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserRef, schema: UserSchema }
        ])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule { }