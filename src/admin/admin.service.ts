import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Admin } from './model';
import { CreateAdminDTO, GetAdminByEmailDTO, GetAdminDTO } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  getAdmins() {
    return this.prisma.admin.findMany();
  }
  async createAdmin(createAdminDto: CreateAdminDTO): Promise<Admin> {
    createAdminDto.password = await argon.hash(createAdminDto.password);
    return this.prisma.admin.create({ data: createAdminDto });
  }

  getAdmin(getAdminDto: GetAdminDTO): Promise<Admin | null> {
    return this.prisma.admin.findUnique({ where: { id: getAdminDto.id } });
  }

  getAdminByEmail(
    getAdminByEmailDto: GetAdminByEmailDTO,
  ): Promise<Admin | null> {
    return this.prisma.admin.findUnique({
      where: { email: getAdminByEmailDto.email },
    });
  }
}
