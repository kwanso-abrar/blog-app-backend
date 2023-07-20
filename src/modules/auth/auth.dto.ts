import { User } from 'src/modules/users/users.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ResponseDto } from 'src/commonDtos';

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
