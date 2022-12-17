/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './erros/notification-not-found-error';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

interface CountRecipientNotificationsResponse  {
  count: number;
};

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(recipientId);
  return {count}     
}

}
