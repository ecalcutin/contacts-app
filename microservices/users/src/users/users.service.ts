import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


import { UserModel } from "./interfaces";
import { UserRef } from "./schemas";


@Injectable()
export class UsersService {
    constructor(@InjectModel(UserRef) private readonly userModel: Model<UserModel>) {

    }
}