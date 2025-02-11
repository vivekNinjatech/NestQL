import { InputType, PartialType } from '@nestjs/graphql';
import { CreatePlayerDTO } from './create-player.dto';

@InputType()
export class UpdatePlayerDTO extends PartialType(CreatePlayerDTO) {}
