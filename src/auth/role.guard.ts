import { CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Role } from '@prisma/client';

export class RoleGuard implements CanActivate {
  public roles: Role[];
  constructor(roles: Role[]) {
    this.roles = roles;
  }
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { role } = ctx.user;
    if (this.roles.includes(role)) {
      return true;
    }
    return false;
  }
}
