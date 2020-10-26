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
    async createUser(data: User): Promise<UserModel> {
        return await this.userService.createUser(data);
    }

    @MessagePattern({ cmd: 'updateUser' })
    async updateUser(data: UserModel): Promise<UserModel> {
        const { _id, ...userData } = data;
        return await this.userService.updateUser(_id, userData)
    }

    @MessagePattern({ cmd: 'deleteUser' })
    async deleteUser(id: string): Promise<UserModel> {
        return await this.userService.deleteUser(id);
    }
}