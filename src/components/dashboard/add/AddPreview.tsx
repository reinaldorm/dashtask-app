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
          name: task.name,
          initial_date: Date.now(),
          final_date: task.date,
          level: task.level,
          tags: task.tags,
          id: '',
          status: 1,
          custom_tags: [],
        }}
      />
    </div>
  );
};

export default AddPreview;
