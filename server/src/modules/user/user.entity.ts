import { AbstractEntity } from 'src/shared/abstract.entity'
import { UserRole } from 'src/shared/constants/constants'
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { Lecture } from '../lecture/lecture.entity'
import { UserDto } from './dto/user.dto'

@Entity()
export class User extends AbstractEntity<UserDto> {
  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole

  @Column({
    unique: true,
  })
  email: string

  @Column({
    select: false,
  })
  password: string

  @Column({})
  fullName: string

  // 선생님의 경우 없음
  @Column({
    nullable: true,
  })
  grade: number

  // 선생님의 경우 없음
  @Column({
    nullable: true,
  })
  classNumber: number

  // 선생님의 경우 없음
  @Column({
    nullable: true,
  })
  studentNumber: number

  @Column({
    nullable: true,
  })
  phone: string

  @Column({
    nullable: true,
  })
  deletedAt: Date

  @ManyToMany(() => Lecture, (lecture) => lecture.users, {
    eager: true,
  })
  @JoinTable()
  lectures: Lecture[]

  dtoClass = UserDto
}
