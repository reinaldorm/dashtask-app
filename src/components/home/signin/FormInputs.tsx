import React, { FormEvent } from 'react';
import gsap from 'gsap';
import { UserContext, UserProps } from '../../../context/user/context';
import FormHeading from './FormHeading';
import FormInput from './FormInput';
import FormSignIn from './FormSignIn';
import useInput from '../../../hooks/useInput';
import styles from './css/signin.module.css';

const FormInputs = () => {
  const { userSignIn } = React.useContext(UserContext) as UserProps;
  const email = useInput({ type: 'email' });
  const password = useInput({ type: 'password' });

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      try {
        await userSignIn(email.value, password.value);
      } catch (err) {
        throw new Error('something gone wrong');
      }
    } else {
      console.log('credencial invalida');
    }
  };

  React.useEffect(() => {
    gsap.from('.' + styles.formInputs, { duration: 1, ease: 'power4.out', x: -50, opacity: 0 });
  }, []);

  return (
    <form
      onSubmit={handleSignIn}
      className={styles.formInputs}>
      <FormHeading />
      <FormInput
        legend="Email"
        label="Email"
        name="email"
        type="email"
        value={email}
      />
      <FormInput
        legend="Password"
        label="Password"
        name="password"
        type="password"
        value={password}
      />
      <FormSignIn />
    </form>
  );
};

export default FormInputs;
