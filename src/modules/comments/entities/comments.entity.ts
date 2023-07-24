import { Base } from 'src/baseEntities';
import { Post } from '../../posts/entities/posts.entity';
import { User } from 'src/modules/users/entities/users.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity('comments')
export class Comment extends Base {
  @Field()
  @Column()
  content: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Comment, (comment) => comment.replies)
  parent: Comment;

  @OneToMany(() => Comment, (reply) => reply.parent)
  replies: Comment[];
}
