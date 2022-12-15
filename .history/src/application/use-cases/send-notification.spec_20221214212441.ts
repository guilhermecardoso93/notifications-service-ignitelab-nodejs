/* eslint-disable prettier/prettier */
import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notification-repository';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-id',
    });

    expect(notificationsRepository).toHaveLength(1);
  });
});
