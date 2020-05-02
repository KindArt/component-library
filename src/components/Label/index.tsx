import React, { FC, HTMLProps } from 'react';
import { LabelWrapper } from './style';

interface ILabel extends HTMLProps<HTMLLabelElement> {
  id?: string;
  content: string;
  testIds?: {
    wrapper?: string;
  };
  classOverrides?: {
    wrapper?: string;
  };
}

const componentName = 'Label';

const Label: FC<ILabel> = ({ id, content, testIds, classOverrides, ...props }) => {
  const tidPrefix = id || componentName;
  const tid = {
    wrapper: (testIds && testIds.wrapper) || 'wrapper',
  };

  return (
    <LabelWrapper
      className={classOverrides && classOverrides.wrapper}
      data-testid={`${tidPrefix}-${tid.wrapper}`}
      {...(props as any)}
    >
      {content}
    </LabelWrapper>
  );
};

export default Label;
