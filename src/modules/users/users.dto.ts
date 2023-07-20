import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class SignupUserInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  @IsNotEmpty()
  role: string;
}
