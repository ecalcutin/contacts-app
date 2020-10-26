import { Controller } from "@nestjs/common";
import { MessagePattern } from '@nestjs/microservices';
import { User, UserModel } from "./interfaces";
import { UsersService } from "./users.service";


@Controller()
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @MessagePattern({ cmd: 'getUsers' })
    async createUser(user: User): Promise<UserModel[]> {
        return await this.userService.getUsers();
    }
}