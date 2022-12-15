/* eslint-disable prettier/prettier */
import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

const notificationRepository = {
  async create(notification: Notification) {
    return console.log(notification)
  }
}

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-id',
    });

    expect(notification).toBeTruthy();
  });
});
