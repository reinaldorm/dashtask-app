export default class TaskSchema {
  task_initial_date;
  task_final_date;
  task_name;
  task_tags;
  constructor({ task_initial_date, task_final_date, task_name, task_tags }: TaskInterface) {
    this.task_initial_date = task_initial_date;
    this.task_final_date = task_final_date;
    this.task_name = task_name;
    this.task_tags = task_tags;
  }
}
