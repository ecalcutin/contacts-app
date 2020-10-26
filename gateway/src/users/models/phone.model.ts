import { Field, Int, ObjectType, } from '@nestjs/graphql';

@ObjectType()
export class Phone {
    @Field(type => Int)
    id: number;

    @Field()
    value: string;
}