import { User } from '../users/entities/users.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../../decorators/currentUser.decorator';
import { PostsService } from './posts.service';
import { PaginationInput } from 'src/baseDtos';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput, CreatePostOutput, GetAllPostsOutput, GetPostByIdOutput } from './dtos/posts.dto';

@UseGuards(AuthGuard)
@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Mutation(() => CreatePostOutput)
  async createPost(@Args('input') input: CreatePostInput, @CurrentUser() user: User) {
    return await this.postsService.createPost(input, user);
  }

  @Query(() => GetPostByIdOutput)
  async getPostById(@Args('id') id: string) {
    return await this.postsService.getPostById(id);
  }

  @Query(() => GetAllPostsOutput)
  async getAllPosts(@Args('paginationInput') paginationInput: PaginationInput) {
    return await this.postsService.getAllPosts(paginationInput);
  }
}
