import { InputType, PartialType } from '@nestjs/graphql';
import { CreateLeagueDTO } from './create-league.dto';

@InputType()
export class UpdateLeagueDTO extends PartialType(CreateLeagueDTO) {}
