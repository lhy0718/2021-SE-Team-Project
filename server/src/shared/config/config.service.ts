import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import dotenv from 'dotenv'
import fs from 'fs'

export class ConfigService {
  private readonly envConfig: { [key: string]: string }

  constructor(filePath: string) {
    const nodeEnv = this.nodeEnv
    this.envConfig = dotenv.parse(fs.readFileSync(filePath))
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

  get(key: string): string {
    return this.envConfig[key]
  }

  getNumber(key: string): number {
    return Number(this.envConfig[key])
  }

  getJwtSecret(): string {
    return this.envConfig['JWT_SECRET']
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    let entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}']
    let migrations = [__dirname + '/../../migrations/*{.ts,.js}']

    if ((<any>module).hot) {
      const entityContext = (<any>require).context(
        './../../modules',
        true,
        /\.entity\.ts$/,
      )
      entities = entityContext.keys().map((id) => {
        const entityModule = entityContext(id)
        const [entity] = Object.values(entityModule)
        return entity
      })
      const migrationContext = (<any>require).context(
        './../../migrations',
        false,
        /\.ts$/,
      )
      migrations = migrationContext.keys().map((id) => {
        const migrationModule = migrationContext(id)
        const [migration] = Object.values(migrationModule)
        return migration
      })
    }
    return {
      entities,
      migrations,
      keepConnectionAlive: true,
      type: 'postgres',
      host: this.get('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.get('DB_USERNAME'),
      password: this.get('DB_PASSWORD'),
      database: this.get('DB_DATABASE'),
      migrationsRun: true,
      logging: this.nodeEnv === 'development',
    }
  }
}
