/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { GetRecipientNotifications } from './get-recipients-notifications';

describe('Get Recipients Notifications by Id', () => {

  it('should be able get recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: 'example-id-1'}),
      expect.objectContaining({ recipientId: 'example-id-1'}),
    ]))
  });
});
