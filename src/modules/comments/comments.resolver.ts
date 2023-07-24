import { User } from '../users/entities/users.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../../decorators/currentUser.decorator';
import { CommentsService } from './comments.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCommentInput, CreateCommentOutput } from './dtos/comments.dto';

@UseGuards(AuthGuard)
@Resolver()
export class CommentsResolver {
  constructor(private commentsService: CommentsService) {}

  @Mutation(() => CreateCommentOutput)
  async createComment(@Args('input') input: CreateCommentInput, @CurrentUser() user: User) {
    return await this.commentsService.createComment(input, user);
  }
}
