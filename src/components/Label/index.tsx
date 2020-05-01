import React, { FC } from 'react';
import { LabelWrapper } from './style';

interface ILabel {
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

const Label: FC<ILabel> = ({ id, content, testIds, classOverrides }) => {
  const tidPrefix = id || componentName;
  const tid = {
    wrapper: (testIds && testIds.wrapper) || 'wrapper',
  };

  return (
    <LabelWrapper className={classOverrides && classOverrides.wrapper} data-testId={`${tidPrefix}-${tid.wrapper}`}>
      {content}
    </LabelWrapper>
  );
};

export default Label;
