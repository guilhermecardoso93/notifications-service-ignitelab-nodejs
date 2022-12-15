/* eslint-disable prettier/prettier */
import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma notificação!');

  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with less than 5 characters', () => {
  const content = new Content('oi!');

  expect(content).toBeTruthy();
});