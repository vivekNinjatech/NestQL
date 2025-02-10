import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { AuthGuard } from './auth.guard';
import { AdminService } from 'src/admin/admin.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AdminModule, PrismaModule],
  providers: [AuthGuard, AdminService],
  exports: [AuthGuard],
})
export class AuthModule {}
