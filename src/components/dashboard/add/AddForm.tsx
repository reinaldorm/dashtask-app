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

const AddForm = () => {
  const { db } = React.useContext(FirebaseContext) as FirebaseProps;
  const { user, userData, taskData } = React.useContext(DataContext) as DataProps;
  const { isOutOfDate } = useCheckDate();
  const { createTask, loading } = useTask(db, user.uid);

  const [name, setName] = React.useState('');
  const [level, setLevel] = React.useState<TaskLevel>(1);
  const [date, setDate] = React.useState(Date.now());
  const [tags, setTags] = React.useState<Array<TaskDefaultTags>>(['misc']);

  React.useEffect(() => {}, [name, level, date, tags]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (name && level && !isOutOfDate(date) && tags.length <= 3) {
      try {
        await createTask({
          task_name: name,
          task_initial_date: Date.now(),
          task_final_date: date,
          task_custom_tags: [],
          task_id: uuid.v4(),
          task_level: level,
          task_status: 1,
          task_tags: tags,
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
          name={name}
          setName={setName}
        />
        <FormLevel
          setLevel={setLevel}
          level={level}
        />
        <FormDate
          date={date}
          setDate={setDate}
        />
        <FormTags
          tags={tags}
          setTags={setTags}
        />
        <FormSubmit />
      </form>
    );
  }
};

export default AddForm;
