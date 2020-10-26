import { Field, ObjectType } from '@nestjs/graphql';

import { Phone } from './phone.model';

@ObjectType()
export class User {
    @Field(type => String)
    _id: number;

    @Field({ nullable: true })
    name: string;

    @Field(type => [Phone])
    phones: Phone[];
}