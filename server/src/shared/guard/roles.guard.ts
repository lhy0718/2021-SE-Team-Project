import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { User } from 'src/modules/user/user.entity'
import { UserRole } from '../constants/constants'

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name)

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())

    if (!roles) {
      return true
    }

    const request = context.switchToHttp().getRequest()
    const user = request.user as User

    const hasRole = () =>
      roles.includes(user.role) || user.role === UserRole.TEACHER
    return user && user.role && hasRole()
  }
}
