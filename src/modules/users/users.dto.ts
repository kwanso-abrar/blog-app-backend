import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ResponseDto } from 'src/commonDtos';
import { User } from './users.entity';

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

@ObjectType()
export class SignupUserOutput extends ResponseDto {
  @Field(() => User)
  user: User;
}
