import React from 'react';

const validators = {
  email: /\w/g,
  username: /\w/g,
  title: /\w/g,
  password: /\w/g,
};

const useForm = (type: keyof typeof validators) => {
  const [state, setState] = React.useState();

  return {};
};

export default useForm;
