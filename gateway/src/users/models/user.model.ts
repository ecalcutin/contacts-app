import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(type => String)
    _id: number;

    @Field({ nullable: true })
    name: string;

    @Field(type => [String])
    phones: String[];
}