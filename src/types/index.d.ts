// Levels
// 1 - Low-Level-Task
// 2 - Mid-Level-Task
// 3 - High-Level-Task
type TaskLevel = 1 | 2 | 3;

// Status
// 1 - Regular
// 2 - Completed
// 3 - Archived
// 4 - Deleted
// 5 - Outdated
type TaskStatus = 1 | 2 | 3 | 4 | 5;

type TaskDefaultTags = 'work' | 'study' | 'health' | 'hobbie' | 'misc';

interface TaskCustomTags {
  name: string;
  color: string;
}

interface TaskInterface {
  task_initial_date: number;
  task_final_date: number;
  task_tags: Array<TaskDefaultTags>;
  task_custom_tags: Array<TaskCustomTags>;
  task_name: string;
  task_status: TaskStatus;
  task_level: TaskLevel;
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
