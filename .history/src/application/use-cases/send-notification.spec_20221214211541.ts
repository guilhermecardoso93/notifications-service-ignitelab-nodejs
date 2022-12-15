/* eslint-disable prettier/prettier */
import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

const notifications: Notification[] = []

const notificationRepository = {
  async create(notification: Notification) {
    return console.log(notification)
  }
}

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

   await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-id',
    });

    console.log(notifications)

    expect(notifications).toHaveLength(1);
  });
});
