import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserProps } from '../../../context/user/context';
import styles from './css/signup.module.css';
import Form from './Form';

const SignUp = () => {
  const { user } = React.useContext(UserContext) as UserProps;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) navigate('/dashboard');
  });

  return (
    <div className={styles.signup}>
      <Form />
    </div>
  );
};

export default SignUp;
