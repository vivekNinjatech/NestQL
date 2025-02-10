import { Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './model';

@Resolver((of) => Admin)
export class AdminResolver {
    constructor(private adminService: AdminService) {}

    @Query((returns)=> Admin)
    async admin() {
        return this.adminService.getAdmins();
    }
}
