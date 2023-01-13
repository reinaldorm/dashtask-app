import React from 'react';
import { User } from 'firebase/auth';
import { FirebaseContext, FirebaseProps } from '../context/firebase/context';

const useAuth = () => {
  const { auth } = React.useContext(FirebaseContext) as FirebaseProps;
  const [user, setUser] = React.useState<User | null>(null);
  const [authenticating, setAuthenticating] = React.useState(true);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthenticating(true);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setAuthenticating(false);
    });
  }, []);

  return { user, authenticating };
};

export default useAuth;
