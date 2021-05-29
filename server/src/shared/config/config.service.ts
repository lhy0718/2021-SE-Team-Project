import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

export class ConfigService {
  private readonly envConfig: { [key: string]: string }

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath))
    console.log('ENVCONFIG', this.envConfig)
  }

  get(key: string): string {
    return this.envConfig[key]
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development'
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production'
  }

  get nodeEnv(): string {
    return this.get('NODE_ENV') || 'development'
  }

  getNumber(key: string): number {
    return Number(this.envConfig[key])
  }

  getJwtSecret(): string {
    return this.envConfig['JWT_SECRET_KEY']
  }
}
