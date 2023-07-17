import { ObjectType, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
export class Base extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ name: 'createdAt' })
  @Column({
    default: () => 'CURRENT_TIMESTAMPZ',
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;

  @Field({ name: 'updatedAt' })
  @Column({
    default: () => 'CURRENT_TIMESTAMPZ',
    type: 'timestamptz',
    name: 'updated_at',
  })
  updatedAt: Date;
}
