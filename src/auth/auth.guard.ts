import {
  CanActivate,
  ExecutionContext,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/model';
import * as argon from 'argon2';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly adminService: AdminService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { email, password } = ctx.req.body.variables;
    const user: Admin | null = await this.adminService.getAdminByEmail({
      email,
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    if (user && (await argon.verify(user.password, password))) {
      ctx.user = user;
      return true;
    } else {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
