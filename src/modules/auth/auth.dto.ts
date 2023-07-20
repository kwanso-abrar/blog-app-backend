import { User } from 'src/modules/users/users.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class SigninUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  password: string;
}

@ObjectType()
export class SigninUserOutput {
  @Field(() => User)
  user: User;

  @Field(() => String)
  accessToken: string;
}
