import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseDto {
  @Field()
  status: number;

  @Field()
  message: string;
}

@InputType()
export class PaginationInput {
  @Field()
  take: number;

  @Field()
  skip: number;
}

@ObjectType()
export class PaginationOutput {
  @Field()
  total: number;

  @Field()
  count: number;
}
