import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [PrismaModule],
  providers: [AdminService, AdminResolver, AuthGuard],
  exports: [AdminService, AuthGuard],
})
export class AdminModule {}
