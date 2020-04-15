import React from 'react';
import Checkbox from '.';

export default {
  component: Checkbox,
  title: 'Checkbox'
};

export const normal = () => <Checkbox name="normal" />;

export const withLabel = () => <Checkbox name="label" label="This is a label" />;

export const withDescription = () => (
  <Checkbox name="description" description="This is a description of the checkbox" />
);

export const multipleCheckboxes = () => {
  return (
    <div>
      <Checkbox name="multi-1" />
      <Checkbox name="multi-2" />
      <Checkbox name="multi-3" />
    </div>
  );
};
