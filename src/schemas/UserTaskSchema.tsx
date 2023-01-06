export default class UserSchema {
  tasks;
  constructor({ tasks }: UserTaskInterface) {
    this.tasks = tasks;
  }
}
