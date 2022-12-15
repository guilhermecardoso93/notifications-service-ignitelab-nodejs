import { Notification } from '../entities/entities';

abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
