import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ProcessedCommandOutputObject")
class ProcessedCommandOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    commandText!: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    arguments?: InputJsonValue;

    @Field(() => Boolean, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Boolean
    })
    @Type(() => Boolean)
    isCompleted?: boolean;
}

export { ProcessedCommandOutput as ProcessedCommandOutput };