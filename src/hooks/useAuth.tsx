import React from 'react';
import { auth } from '../firebase';
import { User } from 'firebase/auth';

const useAuth = () => {
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
