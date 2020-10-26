import { Resolver, Query } from "@nestjs/graphql";
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

    @Query(returns => User)
    async user() {
        const users = await this.userMicroservice.send<string>('getUsers', {}).toPromise();
        return {
            id: 1,
            
        }
    }

}