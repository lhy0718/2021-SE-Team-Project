import { Injectable, Logger } from '@nestjs/common'
import AWS from 'aws-sdk'
import { ConfigService } from 'src/shared/config/config.service'
import { SERVICE_NAME } from 'src/shared/constants/constants'

@Injectable()
export class AwsService {
  private readonly logger = new Logger(AwsService.name)

  private readonly ses = new AWS.SES({
    apiVersion: 'latest',
    region: 'us-east-1',
  })

  constructor(private readonly configService: ConfigService) {
    AWS.config.update({
      region: 'ap-northeast-2',
      accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
    })
  }

  getSES() {
    return this.ses
  }

  async sendEmail({
    toEmail,
    title,
    body,
  }: {
    toEmail: string
    title: string
    body: string
  }) {
    return new Promise((resolve, reject) => {
      this.ses.sendEmail(
        {
          Source: `${SERVICE_NAME} <noreply@service-name.co>`,
          Destination: {
            ToAddresses: [toEmail],
          },
          Message: {
            Subject: {
              Data: title,
              Charset: 'utf-8',
            },
            Body: {
              Html: {
                Data: body,
                Charset: 'utf-8',
              },
            },
          },
        },
        (err, data) => {
          if (err) {
            this.logger.error(JSON.stringify(err, null, 2))
            return reject(err)
          }

          this.logger.debug('EMAIL: ' + JSON.stringify(data, null, 2))
          resolve(data)
        },
      )
    })
  }
}
