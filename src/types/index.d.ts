type TaskLevel = 1 | 2 | 3;

type TaskStatus = 1 | 2 | 3;

type TaskDefaultTags = 'work' | 'study' | 'health' | 'hobbie' | 'misc';

interface TaskCustomTags {
  name: string;
  color: string;
}

interface NewTaskInterface {
  name: string;
  date: number;
  level: TaskLevel;
  tags: Array<TaskDefaultTags>;
}

interface TaskInterface {
  name: string;
  initial_date: number;
  final_date: number;
  id: string;
  status: TaskStatus;
  level: TaskLevel;
  tags: Array<TaskDefaultTags>;
  custom_tags: Array<TaskCustomTags>;
}

interface UserTasksInterface {
  active: Array<TaskInterface>;
  deleted: Array<TaskInterface>;
  archived: Array<TaskInterface>;
}

interface UserDataInterface {
  username: string;
  email: string;
  task_count: number;
  custom_tags: Array<CustomTagsInterface>;
  tasks: UserTasksInterface;
}
