import { NotificationRepository } from 'src/application/repositories/notification-repository'

class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    return console.log(notification);
  },
};