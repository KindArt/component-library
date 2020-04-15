import React from 'react';
import RadioButton from '.';

export default {
  component: RadioButton,
  title: 'Radio Button'
};

export const normal = () => <RadioButton name="normal" />;

export const multiple = () => {
  return (
    <div>
      <RadioButton name="multi-1" />
      <RadioButton name="multi-1" />
      <RadioButton name="multi-1" />
    </div>
  );
};
