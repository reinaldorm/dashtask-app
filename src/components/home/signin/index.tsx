import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext, StoreProps } from '../../../context/context';
import styles from './css/signin.module.css';
import Form from './Form';

const SignIn = () => {
  const { user } = React.useContext(StoreContext) as StoreProps;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user.user) navigate('/dashboard');
  });

  return (
    <div className={styles.signin}>
      <Form />
    </div>
  );
};

export default SignIn;
