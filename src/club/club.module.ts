import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubResolver } from './club.resolver';

@Module({
  providers: [ClubService, ClubResolver],
})
export class ClubModule {}
