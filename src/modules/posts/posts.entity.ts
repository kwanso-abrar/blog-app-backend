import { Base } from 'src/baseEntity';
import { User } from '../users/users.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';

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
}
