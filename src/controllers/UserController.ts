import User from '@models/User';

export default class UserController {
  showName() {
    const user = new User();
    return user.name;
  }
}
