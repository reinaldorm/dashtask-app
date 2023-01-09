import React from 'react';

const useTitle = (title: string) => {
  React.useEffect(() => {
    document.title = `Dashtask - ${title}`;
  }, []);

  return null;
};

export default useTitle;
