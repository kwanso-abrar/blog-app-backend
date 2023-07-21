import { Post } from './entities/posts.entity';
import { User } from '../users/entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostInput, CreatePostOutput, GetPostByIdOutput } from './dtos/posts.dto';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {}

  async createPost(input: CreatePostInput, user: User): Promise<CreatePostOutput> {
    const post = await this.postRepository.save({ ...input, user });
    if (!post) throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);

    return { post, status: 200, message: 'success' };
  }

  async getPostById(id: string): Promise<GetPostByIdOutput> {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);

    return { post, status: 200, message: 'success' };
  }
}
