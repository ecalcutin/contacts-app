import { Resolver, Query, Mutation, Args, ArgsType, Field, ID, InputType } from "@nestjs/graphql";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

import { User } from "../models/user.model";


@InputType()
class UserDto {
    @Field()
    name: String;
    @Field(type => [String])
    phones: String[]
}

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
        @Args('name') name: String,
        @Args('phones', { type: () => [String] }) phones: String[]
    ) {
        return await this.userMicroservice.send<User>({ cmd: 'createUser' }, { name, phones }).toPromise();
    }

    @Mutation(returns => User)
    async updateUser(
        @Args('_id') _id: String,
        @Args('userDto') userData: UserDto
    ) {
        return await this.userMicroservice.send<User>({ cmd: 'updateUser' }, { _id, ...userData }).toPromise();
    }

    @Mutation(returns => User)
    async removeUser(
        @Args('_id') _id: String
    ) {
        return await this.userMicroservice.send<User>({ cmd: 'deleteUser' }, { _id }).toPromise()
    }

}