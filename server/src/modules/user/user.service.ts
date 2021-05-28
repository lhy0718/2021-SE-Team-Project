import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UtilsService } from 'src/providers/utils.service'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name)

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async checkDuplicate(email: string): Promise<boolean> {
    try {
      const isEmailDupliated = await this.userRepository.findOne({
        where: {
          email,
          deletedAt: null,
        },
      })
      return !!isEmailDupliated
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      // 이메일 중복체크
      const isEmailDuplicated = await this.userRepository.findOne({
        where: {
          email: createUserDto.email,
          deletedAt: null,
        },
        order: {
          id: 'DESC',
        },
      })

      if (isEmailDuplicated) {
        throw new BadRequestException('EMAIL_DUPLICATED')
      }

      if (!createUserDto.password) {
        throw new BadRequestException('MISSING_PASSWORD')
      }

      const hashed = UtilsService.generateHash(createUserDto.password)

      const created = await this.userRepository.save({
        role: createUserDto.role,
        email: createUserDto.email,
        password: hashed,
        fullName: createUserDto.fullName,
        grade: createUserDto.grade,
        classNumber: createUserDto.classNumber,
        phone: createUserDto.phone,
      })

      return created.toDto()
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}
