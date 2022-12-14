/* eslint-disable prettier/prettier */
import { MailService } from './mail.service';

export class SMTPMailService implements MailService {
  sendEmail(): string {
    return 'SMTP Mail';
  }
}
