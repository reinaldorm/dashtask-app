import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserProps } from '../../../context/user/context';
import useTitle from '../../../hooks/useTitle';
import styles from './css/signin.module.css';
import Form from './Form';

const SignIn = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext) as UserProps;
  useTitle('Sign In');

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div className={styles.signin}>
      <Form />
    </div>
  );
};

export default SignIn;
