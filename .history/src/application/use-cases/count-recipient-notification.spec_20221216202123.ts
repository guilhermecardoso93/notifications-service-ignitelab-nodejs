/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotifications } from './count-recipient-notification';

describe('Cancel Recipients Notifications ', () => {
  it('should be able count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-id-1',
    });

    expect(count).toEqual(2);
  });
});
