import { Post } from '../entities/posts.entity';
import { IsNotEmpty } from 'class-validator';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { PaginationOutput, ResponseDto } from '../../../baseDtos';

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

@ObjectType()
export class GetPostByIdOutput extends CreatePostOutput {}

@ObjectType()
export class GetAllPostsOutput extends ResponseDto {
  @Field(() => [Post])
  posts: Post[];

  @Field(() => PaginationOutput)
  metaData: PaginationOutput;
}
