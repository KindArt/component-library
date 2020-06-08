import React, { forwardRef, HTMLProps } from 'react';
import { Label } from '../';
import { TextAreaWrapper, TextAreaField, ErrorMessage } from './style';

export interface ITextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  testIds?: {
    wrapper?: string;
    label?: string;
    textArea?: string;
    errorMessage?: string;
  };
}

const componentName = 'TextArea';

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ label, errorMessage, testIds, ...props }, ref) => {
    // const;
    return (
      <TextAreaWrapper>
        {label && <Label content={label} />}
        <TextAreaField ref={ref} errorMessage={errorMessage} {...(props as any)} />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </TextAreaWrapper>
    );
  }
);

export default TextArea;
