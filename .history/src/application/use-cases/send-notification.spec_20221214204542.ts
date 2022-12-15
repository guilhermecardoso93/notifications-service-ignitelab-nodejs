import { SendNotification } from './send-notification';

/* eslint-disable prettier/prettier */
describe("Send Notification", () => {
  it('should be able to send a notification', () => {
    const sendNotification = new SendNotification()

    sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-id'
    })

  })
})
