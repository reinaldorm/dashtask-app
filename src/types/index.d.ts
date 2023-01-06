interface UserInterface {
  username: string;
  email: string;
  task_count: number;
}

interface UserTaskInterface {
  tasks: Array<TaskInterface>;
}

interface TaskInterface {
  task_initial_date: number;
  task_final_date: number;
  task_tags: Array<string>;
  task_name: string;
}
