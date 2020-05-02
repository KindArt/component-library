import React, { HTMLProps, ReactNode, forwardRef } from 'react';
import { Wrapper, ErrorMessage, IconWrapper, InputWrapper, InputField } from './style';
import Label from '../Label';

enum ElementIdentifiers {
  wrapper = 'wrapper',
  label = 'label',
  icon = 'icon',
  input = 'input',
  errorMessage = 'errorMessage',
}

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  errorMessage?: string;
  value?: string;
  testIds?: {
    wrapper?: string;
    label?: string;
    icon?: string;
    input?: string;
    errorMessage?: string;
  };
  classOverrides?: {
    wrapper?: string;
    label?: string;
    icon?: string;
    input?: string;
    errorMessage?: string;
  };
}

const componentName = 'Input';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      id,
      label,
      icon,
      iconPosition = 'left',
      errorMessage,
      value,
      testIds,
      classOverrides,
      type = 'text',
      name,
      ...props
    },
    ref
  ) => {
    const tidPrefix = id || componentName;
    const tid = {
      wrapper: (testIds && testIds.wrapper) || ElementIdentifiers.wrapper,
      icon: (testIds && testIds.icon) || ElementIdentifiers.icon,
      input: (testIds && testIds.input) || ElementIdentifiers.input,
      errorMessage: (testIds && testIds.errorMessage) || ElementIdentifiers.errorMessage,
    };
    return (
      <Wrapper className={classOverrides && classOverrides.wrapper} data-testid={`${tidPrefix}-${tid.wrapper}`}>
        {label && (
          <Label classOverrides={{ wrapper: classOverrides && classOverrides.label }} content={label} htmlFor={id} />
        )}
        <InputWrapper>
          {icon && (
            <IconWrapper
              className={classOverrides && classOverrides.icon}
              data-testid={`${tidPrefix}-${tid.icon}`}
              iconPosition={iconPosition}
            >
              {icon}
            </IconWrapper>
          )}
          <InputField
            id={id}
            ref={ref}
            className={classOverrides && classOverrides.input}
            data-testid={`${tidPrefix}-${tid.input}`}
            name={name}
            type={type}
            errorMessage={errorMessage}
            value={value}
            {...(props as any)}
          ></InputField>
        </InputWrapper>
        {errorMessage && (
          <ErrorMessage
            className={classOverrides && classOverrides.errorMessage}
            data-testid={`${tidPrefix}-${tid.errorMessage}`}
          >
            {errorMessage}
          </ErrorMessage>
        )}
      </Wrapper>
    );
  }
);

export default Input;
