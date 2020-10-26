import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


import { User, UserModel } from "./interfaces";
import { UserRef } from "./schemas";


@Injectable()
export class UsersService {
    constructor(@InjectModel(UserRef) private readonly userModel: Model<UserModel>) {

    }

    async createUser(user: User): Promise<UserModel> {
        return await new this.userModel(user).save()
    }

    async getUsers(): Promise<UserModel[]> {
        return await this.userModel.find().exec();
    }
}