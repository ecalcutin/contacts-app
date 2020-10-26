import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

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
    async createUser(
        @Args('name') name: string
    ) {
        return await this.userMicroservice.send<User>({ cmd: 'createUser' }, { name }).toPromise();
    }

}