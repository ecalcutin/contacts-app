import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


import { User, UserModel } from "./interfaces";
import { UserRef } from "./schemas";


@Injectable()
export class UsersService {
    constructor(@InjectModel(UserRef) private readonly userModel: Model<UserModel>) { }

    async createUser(userData: User): Promise<UserModel> {
        return await new this.userModel(userData).save()
    }

    async getUsers(): Promise<UserModel[]> {
        return await this.userModel.find().exec();
    }

    async updateUser(_id: string, userData: User): Promise<UserModel> {
        const $updated = await this.userModel.findByIdAndUpdate(_id, {
            name: userData.name,
            phones: userData.phones
        }, { new: true }).exec();
        return $updated;
    }

    async deleteUser(_id: string): Promise<UserModel> {
        return await this.userModel.findByIdAndRemove(_id).exec();
    }
}