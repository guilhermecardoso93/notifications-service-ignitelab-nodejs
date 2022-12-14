/* eslint-disable prettier/prettier */
import { MailService } from './mail.service';

@Injectable()
export class PostmarkMailService implements MailService {
  sendEmail(): string {
    return 'Postmark Mail';
  }
}
