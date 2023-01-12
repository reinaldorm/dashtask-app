import React from 'react';
import Task from '../tasks/Task';
import styles from './css/add.module.css';

interface AddPreviewProps {
  task: NewTaskInterface;
}

const AddPreview = ({ task }: AddPreviewProps) => {
  return (
    <div className={styles.addPreview}>
      <Task
        menu={true}
        date_label={undefined}
        task={{
          task_name: task.name,
          task_initial_date: Date.now(),
          task_final_date: task.date,
          task_level: task.level,
          task_tags: task.tags,
          task_id: '',
          task_status: 1,
          task_custom_tags: [],
        }}
      />
    </div>
  );
};

export default AddPreview;
