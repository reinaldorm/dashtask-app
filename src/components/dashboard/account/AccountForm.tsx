import React from 'react';
import styles from './css/account.module.css';
import { updateEmail, updatePassword } from 'firebase/auth';

enum Actions {
  USERNAME = 'USERNAME',
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD',
}

interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

interface UserAction {
  payload: {
    [key: string]: string;
  };
  type: Actions;
}

interface AccountFormProps {
  data: UserDataInterface;
}

const AccountForm = ({ data }: AccountFormProps) => {
  const [credentials, updateCredentials] = React.useReducer(
    (state: UserCredentials, action: UserAction) => {
      const { payload, type } = action;

      switch (type) {
        case Actions.USERNAME:
          state.username = payload.username;
          break;
        case Actions.EMAIL:
          state.email = payload.email;
          break;
        case Actions.PASSWORD:
          state.password = payload.password;
          break;

        default:
          break;
      }

      return state;
    },
    {
      username: data.username,
      email: data.email,
      password: '*************',
    }
  );
  7;
  const handleEdit = () => {};

  return <div className={styles.accountForm}>AccountForm</div>;
};

export default AccountForm;
