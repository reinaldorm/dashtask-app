export default class UserSchema {
  username;
  email;
  task_count;
  constructor({ username, email, task_count }: UserInterface) {
    this.username = username;
    this.email = email;
    this.task_count = task_count;
  }
}
