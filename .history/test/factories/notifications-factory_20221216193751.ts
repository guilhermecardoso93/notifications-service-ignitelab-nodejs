import { Content } from "@application/entities/entities";
import { Notification, NotificationsProps } from "@application/entities/notification";

type Override = Partial <NotificationsProps>

export function makeNotification(override: Override = { }) {
  return new Notification({
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    recipientId: 'example-id-1',
  }),
}