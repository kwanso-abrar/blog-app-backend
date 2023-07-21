import { User } from '../users/users.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { PostsService } from './posts.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreatePostInput, CreatePostOutput } from './posts.dto';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => CreatePostOutput)
  async createPost(@Args('input') input: CreatePostInput, @CurrentUser() user: User) {
    return await this.postsService.createPost(input, user);
  }
}
