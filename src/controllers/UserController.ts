import { User } from '@models/User';

export class UserController {
  showName() {
    const user = new User();
    return user.name;
  }
}
