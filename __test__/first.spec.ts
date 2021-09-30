import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();
  user.name = 'Jeordane';
  expect(user.name).toBe('Jeordane');
});
