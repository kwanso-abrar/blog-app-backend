import { Field, ObjectType } from '@nestjs/graphql';
import { Base } from 'src/utils/baseEntity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity('users')
export class User extends Base {
  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ name: 'username', nullable: true })
  userName: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar: string;

  @Field()
  @Column()
  role: string;
}
