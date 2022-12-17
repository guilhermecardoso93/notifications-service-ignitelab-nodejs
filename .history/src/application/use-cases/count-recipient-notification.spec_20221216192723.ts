/* eslint-disable prettier/prettier */
import { Content } from '@application/entities/entities';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotifications } from './count-recipient-notification';
import { NotificationNotFound } from './erros/notification-not-found-error';

describe('Cancel Recipients Notifications ', () => {
  it('should be able count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
        recipientId: 'example-id-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
        recipientId: 'example-id-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
        recipientId: 'example-id-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-id-1',
    });

    expect(count).toEqual(2);
  });
});
