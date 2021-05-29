import { Module, Global } from '@nestjs/common'
import { ConfigService } from './config.service'

console.debug('[NODE_ENV] : ', process.env.NODE_ENV)

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`.${process.env.NODE_ENV}.env`),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
