import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Player {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  age: number;

  @Field()
  @Column()
  nationality: string;

  @Field()
  @Column()
  club: string;

  @Field(() => Int)
  @Column()
  jerseyNumber: number;

  @Field(() => Float, { nullable: true })
  @Column('float', { nullable: true })
  height?: number;

  @Field(() => Float, { nullable: true })
  @Column('float', { nullable: true })
  weight?: number;

  @Field(() => [String])
  @Column('text', { array: true })
  positions: string[];

  @Field(() => Int)
  @Column()
  goals: number;

  @Field(() => Int)
  @Column()
  assists: number;

  @Field(() => Int)
  @Column()
  yellowCards: number;

  @Field(() => Int)
  @Column()
  redCards: number;

  @Field(() => Int)
  @Column()
  matchesPlayed: number;
}
