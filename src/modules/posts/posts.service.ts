import { Post } from './entities/posts.entity';
import { User } from '../users/entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInput, CreatePostOutput } from './dtos/posts.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {}

  async createPost(input: CreatePostInput, user: User): Promise<CreatePostOutput> {
    const post = await this.postRepository.save({ ...input, user });
    if (!post) throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);

    return { post, status: 200, message: 'success' };
  }
}
