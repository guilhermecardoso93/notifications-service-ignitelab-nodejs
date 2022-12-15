/* eslint-disable prettier/prettier */
import { Notification } from '../entities/notification';

abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>
}
