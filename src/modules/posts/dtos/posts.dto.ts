import { Post } from '../entities/posts.entity';
import { IsNotEmpty } from 'class-validator';
import { ResponseDto } from 'src/baseDtos';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  content: string;

  @Field()
  @IsNotEmpty()
  tag: string;

  @Field()
  @IsNotEmpty()
  minutesToRead: number;
}

@ObjectType()
export class CreatePostOutput extends ResponseDto {
  @Field(() => Post)
  post: Post;
}
