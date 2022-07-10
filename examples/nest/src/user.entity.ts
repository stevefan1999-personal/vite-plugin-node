import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType('User')
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  isActive: boolean;

  @Column({ default: false })
  @Field()
  isCat: boolean;
}
