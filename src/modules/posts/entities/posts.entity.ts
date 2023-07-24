import { Base } from '../../../baseEntities';
import { User } from '../../users/entities/users.entity';
import { Comment } from '../../comments/entities/comments.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity('posts')
export class Post extends Base {
  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image: string;

  @Field()
  @Column()
  tag: string;

  @Field()
  @Column()
  minutesToRead: number;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
