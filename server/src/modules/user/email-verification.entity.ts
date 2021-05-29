import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity()
export class EmailVerification {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  email: string

  @Column()
  verificationCode: string

  @Column({
    default: false,
  })
  isVerified: boolean

  @CreateDateColumn()
  createdAt: Date
}
