import React, { FormEvent } from 'react';
import gsap from 'gsap';
import { UserContext, UserProps } from '../../../context/user/context';
import FormHeading from './FormHeading';
import FormInput from './FormInput';
import FormSignUp from './FormSignUp';
import useInput from '../../../hooks/useInput';
import styles from './css/signup.module.css';

const FormInputs = () => {
  const comp = React.useRef<HTMLFormElement | null>(null);
  const { userSignUp } = React.useContext(UserContext) as UserProps;
  const username = useInput({ type: 'username' });
  const email = useInput({ type: 'email' });
  const password = useInput({ type: 'password' });

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      try {
        await userSignUp(username.value, email.value, password.value);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('credencial invalida');
    }
  };

  React.useEffect(() => {
    const tween = gsap.from(comp.current, {
      duration: 1,
      ease: 'power4.out',
      x: 50,
      opacity: 0,
    });

    return () => {
      tween.revert();
    };
  }, []);

  return (
    <form
      ref={comp}
      onSubmit={handleSignUp}
      className={styles.formInputs}>
      <FormHeading />
      <FormInput
        legend="Enter your username"
        label="Username"
        name="username"
        type="text"
        value={username}
      />
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
      <FormSignUp />
    </form>
  );
};

export default FormInputs;
