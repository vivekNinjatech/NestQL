import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { CreateAdminDTO, GetAdminDTO } from './dto';
import * as jsonwebtoken from 'jsonwebtoken';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import * as dotenv from 'dotenv';
import { JwtGuard } from 'src/auth/jwt.guard';
import { Admin } from './model';
import { RoleGuard } from 'src/auth/role.guard';
import { Role } from '@prisma/client';
dotenv.config();

@Resolver((of) => Admin)
export class AdminResolver {
  constructor(private adminService: AdminService) {}

  @Query((returns) => Admin)
  @UseGuards(JwtGuard, new RoleGuard(Role.ADMIN))
  getAdmin(
    @Args('getAdminDTO') getAdminDTO: GetAdminDTO,
  ): Promise<Admin | null> {
    return this.adminService.getAdmin(getAdminDTO);
  }

  @Query((returns) => Admin, { nullable: true })
  @UseGuards(JwtGuard)
  getMyProfile(@Context('user') user: Admin): Admin {
    return user;
  }

  @Query((returns) => [Admin])
  @UseGuards(JwtGuard)
  getAdmins(@Context('user') user: Admin): Promise<Omit<Admin, 'password'>[]> {
    return this.adminService.getAdmins();
  }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  loginAdmin(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: Admin,
  ): string {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
  }

  @Mutation((returns) => Admin)
  registerAdmin(
    @Args('createAdminDto') createAdminDto: CreateAdminDTO,
  ): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }
}
