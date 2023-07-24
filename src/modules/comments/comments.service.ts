import { Post } from '../posts/entities/posts.entity';
import { User } from '../users/entities/users.entity';
import { Comment } from './entities/comments.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentInput, CreateCommentOutput } from './dtos/comments.dto';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>) {}

  async createComment(input: CreateCommentInput, user: User): Promise<CreateCommentOutput> {
    try {
      const { content, postId, parentId } = input;
      const commentDto: Partial<Comment> = { content, post: { id: postId } as Post, parent: { id: parentId } as Comment, user };

      const comment = await this.commentRepository.save(commentDto);
      return { comment, status: 200, message: 'success' };
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
