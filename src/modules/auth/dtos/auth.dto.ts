import { User } from '../../users/entities/users.entity';
import { ResponseDto } from '../../../baseDtos';
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
export class SigninUserOutput extends ResponseDto {
  @Field(() => User)
  user: User;

  @Field(() => String)
  accessToken: string;
}
