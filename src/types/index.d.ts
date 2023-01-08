interface CustomTagsInterface {
  name: string;
  color: string;
}

interface TaskInterface {
  task_initial_date: number;
  task_final_date: number;
  task_tags: Array<string>;
  task_name: string;
  // Status codes
  // 1 - Regular
  // 2 - Completed
  // 3 - Archived
  // 4 - Deleted
  // 5 - Out of Date
  task_status: number;
}

interface UserInterface {
  username: string;
  email: string;
  task_count: number;
  custom_tags: Array<CustomTagsInterface>;
}

interface UserTaskInterface {
  tasks: Array<TaskInterface>;
  deleted: Array<TaskInterface>;
  archived: Array<TaskInterface>;
  completed: Array<TaskInterface>;
}
