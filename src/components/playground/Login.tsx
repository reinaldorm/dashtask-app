import React, { FormEvent } from 'react';
import { StoreContext, StoreProps } from '../../context/context';
import('./index.css');

const Login = () => {
  const { user } = React.useContext(StoreContext) as StoreProps;
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    user.userCreate(username, email, password);
  };

  return (
    <>
      <form
        className="login"
        onSubmit={handleSignUp}>
        <input
          type="text"
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
        />
        <button>Register</button>
      </form>
      <button onClick={() => user.userSignOut()}>Logout</button>
    </>
  );
};

export default Login;
