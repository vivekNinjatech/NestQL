import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jsonwebtoken from 'jsonwebtoken';

@Injectable()
export class JwtGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    const authHeader = ctx.req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      try {
        const user = jsonwebtoken.verify(token, process.env.JWT_SECRET!);
        ctx.user = user;
        return true;
      } catch (error) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }
    } else {
      return false;
    }
  }
}
