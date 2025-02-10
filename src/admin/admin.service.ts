import { Injectable } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { Admin } from './model';
import { CreateAdminDTO, GetAdminDTO } from './dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  getAdmins() {
    return this.prisma.admin.findMany();
  }
  createAdmin(createAdminDto: CreateAdminDTO): Promise<Admin> {
    return this.prisma.admin.create({ data: createAdminDto });
  }

  getAdmin(getAdminDto: GetAdminDTO): Promise<Admin | null> {
    return this.prisma.admin.findUnique({ where: { id: getAdminDto.id } });
  }
}
