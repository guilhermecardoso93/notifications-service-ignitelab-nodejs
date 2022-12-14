import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './email/mail.service';
import { SMTPMailService } from './email/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}
