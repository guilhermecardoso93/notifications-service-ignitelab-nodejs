import { Content } from "@application/entities/entities";
import { Notification } from "@application/entities/notification";

export function makeNotification() {
  return new Notification({
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    recipientId: 'example-id-1',
  }),
}