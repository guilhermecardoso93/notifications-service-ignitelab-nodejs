/* eslint-disable prettier/prettier */
import { Notification } from '@prisma/client'
import { Notification  as NotificationProps } from '@application/entities/notification';
import { Content } from '@application/entities/entities';


export class PrismaNotificationMapper {
  static toPrisma(notification: NotificationProps) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: Notification): NotificationProps {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      readAt: raw.readAt,
      cancelAt: raw.cancelAt,
      createdAt: raw.createdAt,
    }, raw.id);
  }
}
