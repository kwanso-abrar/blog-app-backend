import { User } from 'src/modules/users/entities/users.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ResponseDto } from 'src/baseDtos';

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
export class SigninUserOutput extends ResponseDto {
  @Field(() => User)
  user: User;

  @Field(() => String)
  accessToken: string;
}
