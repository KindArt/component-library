import React, { FC, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { FormGroupWrapper, ErrorMessage, IconWrapper, InputWrapper, InputField } from './style';
import Label from '../Label';

enum ElementIdentifiers {
  formGroup = 'formGroup',
  label = 'label',
  icon = 'icon',
  input = 'input',
  errorMessage = 'errorMessage',
}

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  errorMessage?: string;
  value?: string;
  testIds?: {
    formGroup?: string;
    label?: string;
    icon?: string;
    input?: string;
    errorMessage?: string;
  };
  ref:
    | (((instance: HTMLInputElement | null) => void) & HTMLInputElement)
    | (React.RefObject<HTMLInputElement> & HTMLInputElement);
}

const componentName = 'Input';

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ id, label, icon, iconPosition = 'left', errorMessage, value, testIds, ...props }, ref) => {
    const tidPrefix = id || componentName;
    const tid = {
      formGroup: (testIds && testIds.formGroup) || ElementIdentifiers.formGroup,
      label: (testIds && testIds.label) || ElementIdentifiers.label,
      icon: (testIds && testIds.icon) || ElementIdentifiers.icon,
      input: (testIds && testIds.input) || ElementIdentifiers.input,
      errorMessage: (testIds && testIds.errorMessage) || ElementIdentifiers.errorMessage,
    };
    return (
      <FormGroupWrapper data-test-id={`${tidPrefix}-${tid.formGroup}`}>
        {label && <Label data-test-id={`${tidPrefix}-${tid.label}`} content={label} />}
        <InputWrapper>
          {icon && (
            <IconWrapper data-test-id={`${tidPrefix}-${tid.icon}`} iconPosition={iconPosition}>
              {icon}
            </IconWrapper>
          )}
          <InputField
            ref={ref}
            data-test-id={`${tidPrefix}-${tid.input}`}
            type="text"
            errorMessage={errorMessage}
            value={value}
            {...props}
          ></InputField>
        </InputWrapper>
        {errorMessage && <ErrorMessage data-test-id={`${tidPrefix}-${tid.errorMessage}`}>{errorMessage}</ErrorMessage>}
      </FormGroupWrapper>
    );
  }
);

export default Input;
