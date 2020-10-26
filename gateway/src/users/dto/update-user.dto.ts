import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateUserDto {
    @Field()
    name: String;
    @Field(type => [String])
    phones: String[]
}
