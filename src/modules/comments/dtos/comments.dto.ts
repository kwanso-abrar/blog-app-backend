import { Comment } from '../entities/comments.entity';
import { ResponseDto } from 'src/baseDtos';
import { IsNotEmpty, ValidateIf } from 'class-validator';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  @IsNotEmpty()
  content: string;

  @Field()
  @IsNotEmpty()
  postId: string;

  @Field({ nullable: true })
  @ValidateIf((input) => input.parentId !== undefined)
  @IsNotEmpty()
  parentId?: string;
}

@ObjectType()
export class CreateCommentOutput extends ResponseDto {
  @Field()
  comment: Comment;
}
