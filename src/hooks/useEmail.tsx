import React from 'react';

const validator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_.,/?:><= ])[A-Za-z\d!@#$%^&*()_.,/?:><= ]{8,}$/g;

const validators = {
  length: /\w/g,
  number: /\w/g,
  special: /\w/g,
};

const useEmail = () => {
  const [state, setState] = React.useState('');
  const [error, setError] = React.useState(false);

  const validate = () => {
    if (!validators.length.test(state)) {
      return false;
    }
  };

  return { state, error, validate };
};

export default useEmail;
