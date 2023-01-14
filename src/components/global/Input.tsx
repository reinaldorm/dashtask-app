import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  input_type: string;
}

const Input = (props: InputProps) => {
  const { ...rest } = props;
  return <input {...rest} />;
};

export default Input;
