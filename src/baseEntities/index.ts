import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
export class Base extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field(() => Date)
  updatedAt: Date;
}
