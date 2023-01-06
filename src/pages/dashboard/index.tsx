import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext, StoreProps } from '../../context/context';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(StoreContext) as StoreProps;

  React.useEffect(() => {
    if (!user.user) {
      navigate('/');
    }
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
