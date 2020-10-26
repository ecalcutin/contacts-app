import { Controller } from "@nestjs/common";
import { MessagePattern } from '@nestjs/microservices';

import { User, UserModel } from "./interfaces";
import { UsersService } from "./users.service";


@Controller()
export class UsersController {

    constructor(private userService: UsersService) { }

    @MessagePattern({ cmd: 'getUsers' })
    async getUsers(): Promise<UserModel[]> {
        return await this.userService.getUsers();
    }

    @MessagePattern({ cmd: 'createUser' })
    async createUser(data): Promise<UserModel> {
        const { name, phones } = data;
        console.log(data)
        return await this.userService.createUser(data);
    }

    @MessagePattern({ cmd: 'updateUser' })
    async updateUser(data): Promise<UserModel> {
        const { _id, ...userData } = data;
        return await this.userService.updateUser(_id, userData)
    }

    @MessagePattern({ cmd: 'deleteUser' })
    async deleteUser(id: string): Promise<UserModel> {
        return await this.userService.deleteUser(id);
    }
}