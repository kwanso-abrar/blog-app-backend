import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  role: string;
}
