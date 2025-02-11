import { InputType, PartialType } from '@nestjs/graphql';
import { CreateNationalTeamDTO } from './create-national-team.dto';

@InputType()
export class UpdateNationalTeamDTO extends PartialType(CreateNationalTeamDTO) {}
