import React, { FC } from 'react';
import { LabelWrapper } from './style';

interface ILabel {
  content: string;
}

const Label: FC<ILabel> = ({ content }) => <LabelWrapper>{content}</LabelWrapper>;

export default Label;
