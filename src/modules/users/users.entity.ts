import { Base } from 'src/baseEntity';
import { Column, Entity } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('users')
export class User extends Base {
  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ name: 'username', nullable: true })
  userName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar?: string;

  @Field()
  @Column()
  role: string;
}