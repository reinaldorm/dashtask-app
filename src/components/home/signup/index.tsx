import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserProps } from '../../../context/user/context';
import useTitle from '../../../hooks/useTitle';
import styles from './css/signup.module.css';
import Form from './Form';

const SignUp = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext) as UserProps;
  useTitle('Sign Up');

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div className={styles.signup}>
      <Form />
    </div>
  );
};

export default SignUp;
