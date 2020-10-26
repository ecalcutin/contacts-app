import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

import { CreateUserDto, UpdateUserDto } from "../dto/";
import { User } from "../models/user.model";


@Resolver(of => User)
export class UserResolver {
    private userMicroservice: ClientProxy;

    constructor() {
        this.userMicroservice = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                port: 8000
            }
        })
    }

    @Query(returns => [User])
    async users() {
        return await this.userMicroservice.send<User[]>({ cmd: 'getUsers' }, {}).toPromise();
    }

    @Mutation(returns => User)
    async createUser(@Args('userDto') userData: CreateUserDto) {
        return await this.userMicroservice.send<User>({ cmd: 'createUser' }, { userData }).toPromise();
    }

    @Mutation(returns => User)
    async updateUser(@Args('_id') _id: String, @Args('userDto') userData: UpdateUserDto) {
        return await this.userMicroservice.send<User>({ cmd: 'updateUser' }, { _id, ...userData }).toPromise();
    }

    @Mutation(returns => User)
    async removeUser(@Args('_id') _id: String) {
        return await this.userMicroservice.send<User>({ cmd: 'deleteUser' }, { _id }).toPromise()
    }

}