import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './model';
import { CreateAdminDTO, GetAdminDTO } from './dto';
import { get } from 'http';

@Resolver((of) => Admin)
export class AdminResolver {
  constructor(private adminService: AdminService) {}

  @Query((returns) => Admin)
  getAdmin(
    @Args('getAdminDTO') getAdminDTO: GetAdminDTO,
  ): Promise<Admin | null> {
    return this.adminService.getAdmin(getAdminDTO);
  }

  @Query((returns) => [Admin])
  getAdmins(): Promise<Admin[]> {
    return this.adminService.getAdmins();
  }

  @Mutation((returns) => Admin)
  createAdmin(
    @Args('createAdminDto') createAdminDto: CreateAdminDTO,
  ): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }
}
