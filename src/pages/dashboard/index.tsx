import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserProps } from '../../context/user/context';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext) as UserProps;

  React.useEffect(() => {
    if (!user) {
      navigate('/');
      console.log('a');
    }
  }, [user]);

  return <div>Dashboard</div>;
};

export default Dashboard;
