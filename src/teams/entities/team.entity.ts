import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Player } from '../../players/entities/player.entity';

@ObjectType()
@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'The unique identifier for the team' })
  id: number;

  @Column()
  @Field({ description: 'The name of the team' })
  name: string;

  @Column()
  @Field({ description: 'The name of the stadium where the team plays' })
  stadium: string;

  @Column()
  @Field({ description: 'The year the team was founded' })
  founded: number;

  @Column({ nullable: true })
  @Field(() => Int, {
    description: 'The number of players in the team',
    nullable: true,
    defaultValue: 0,
  })
  numberOfPlayers: number;

  @Field({ description: 'The manager of the team' })
  @Column()
  manager: string;

  @Column()
  @Field({ description: 'The Capitan of the team' })
  capitan: string;

  @OneToMany(() => Player, (player) => player.team)
  @Field(() => [Player], { nullable: true })
  players: Player[];

  @Column()
  @Field({ description: 'The league the team is part of' })
  league: string;

  @Column()
  @Field(() => Int, { description: 'The total number of wins the team has' })
  totalWins: number;

  @Column()
  @Field(() => Int, { description: 'The total number of losses the team has' })
  totalLosses: number;

  @Column()
  @Field(() => Int, { description: 'The total number of draws the team has' })
  totalDraws: number;

  @Column()
  @Field(() => Int, {
    description: 'The total number of goals scored by the team',
  })
  totalGoalsScored: number;

  @Column()
  @Field(() => Int, {
    description: 'The total number of goals conceded by the team',
  })
  totalGoalsConceded: number;
}
