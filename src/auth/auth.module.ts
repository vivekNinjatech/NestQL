import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { AuthGuard } from './auth.guard';
import { AdminService } from 'src/admin/admin.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtGuard } from './jwt.guard';

@Module({
  imports: [AdminModule, PrismaModule],
  providers: [AuthGuard, JwtGuard, AdminService],
  exports: [AuthGuard],
})
export class AuthModule {}
