import React from 'react';
import Input from '.';

export default {
  component: Input,
  title: 'Input',
  decorators: [(storyFn: any) => <div style={{ maxWidth: '50%' }}>{storyFn()}</div>]
};

const iconMock = (
  <span role="img" aria-label="">
    ✊🏾
  </span>
);

export const normal = () => <Input />;

export const placeholder = () => <Input placeholder="Placeholder" />;

export const errorState = () => <Input errorMessage="There is an error!" />;

export const withLabel = () => <Input label="Label" />;

export const LHSIcon = () => <Input icon={iconMock} />;

export const RHSIcon = () => <Input icon={iconMock} iconPosition="right" />;
