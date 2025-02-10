import { Injectable } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  getAdmins() {
    return this.prisma.admin.findMany();
  }
  create(createAdminDto: any) {
    return this.prisma.admin.create({ data: createAdminDto });
  }
}
