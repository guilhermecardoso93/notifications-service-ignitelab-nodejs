/* eslint-disable prettier/prettier */
import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma notificação!');

  expect(content).toBeTruthy();
});
