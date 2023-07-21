import { Base } from 'src/baseEntity';
import { Post } from '../posts/posts.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity('users')
export class User extends Base {
  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar?: string;

  @Field()
  @Column()
  role: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
