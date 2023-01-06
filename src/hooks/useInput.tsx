import React, { SetStateAction } from 'react';

const validators = {
  email: /\w+/g,
  password: /\w+/g,
  username: /\w+/g,
};

interface useInputProps {
  type: keyof typeof validators;
}

export interface useInputMap {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  validate: () => boolean;
}

const useInput = ({ type }: useInputProps) => {
  const [value, setValue] = React.useState('');

  const validate = (): boolean => {
    const validation = validators[type].test(value);

    if (validation) {
      return true;
    } else {
      return false;
    }
  };

  return { value, setValue, validate };
};

export default useInput;
