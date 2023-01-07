import React from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, []);

  return <div>Loading Component</div>;
};

export default Loading;
