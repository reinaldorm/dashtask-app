import React, { FormEvent } from 'react';
import * as uuid from 'uuid';
import { FirebaseContext, FirebaseProps } from '../../../context/firebase/context';
import { DataContext, DataProps } from '../../../context/data/context';
import FormInput from './FormInput';
import FormLevel from './FormLevel';
import FormDate from './FormDate';
import FormSubmit from './FormSubmit';
import FormTags from './FormTags';
import useCheckDate from '../../../hooks/useCheckDate';
import useTask from '../../../hooks/useTask';
import styles from './css/add.module.css';
import Loading from '../tasks/Loading';

interface AddFormProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}

const AddForm = ({ task, setTask }: AddFormProps) => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const { user, userData, taskData } = React.useContext(DataContext) as DataProps;
  const { isOutOfDate } = useCheckDate();
  const { createTask, loading } = useTask(db, user.uid);

  React.useEffect(() => {}, [task.name, task.level, task.date, task.tags]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (task.name && task.level && !isOutOfDate(task.date) && task.tags.length <= 3) {
      try {
        await createTask({
          task_name: task.name,
          task_initial_date: Date.now(),
          task_final_date: task.date,
          task_custom_tags: [],
          task_id: uuid.v4(),
          task_level: task.level,
          task_status: 1,
          task_tags: task.tags,
        });
        await userData.getData();
        await taskData.getData();
      } catch (e) {
        console.log('Something went wrong:', e);
      }
    } else {
      console.log('Something went wrong with fields.');
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <form
        onSubmit={handleSubmit}
        className={styles.addForm}>
        <FormInput
          setTask={setTask}
          task={task}
        />
        <FormLevel
          setTask={setTask}
          task={task}
        />
        <FormDate
          setTask={setTask}
          task={task}
        />
        <FormTags
          task={task}
          setTask={setTask}
        />
        <FormSubmit />
      </form>
    );
  }
};

export default AddForm;
