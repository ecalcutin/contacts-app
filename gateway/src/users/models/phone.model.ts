import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Phone {
    @Field(type => String)
    _id: number;

    @Field()
    value: string;
}