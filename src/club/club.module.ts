import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubResolver } from './club.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ClubService, ClubResolver],
  imports: [PrismaModule],
})
export class ClubModule {}
