import styled, { css } from 'styled-components';
import { HTMLProps } from 'react';
import { Colours, CssVariables } from '../../constants/styles';
import { IInputProps } from '.';

export const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

interface IIconWrapper {
  iconPosition: 'left' | 'right';
}

export const IconWrapper = styled.span<IIconWrapper>`
  position: absolute;
  top: 50%;
  color: ${({ theme }) => theme.input.iconWrapperColour};
  transform: translateY(-50%);

  ${({ iconPosition }) =>
    iconPosition === 'left' &&
    css`
      left: 12px;
      & + ${InputField} {
        padding-left: 40px;
      }
    `}

  ${({ iconPosition }) =>
    iconPosition === 'right' &&
    css`
      // left: auto;
      right: 12px;
      & + ${InputField} {
        padding-right: 40px;
      }
    `}
`;

IconWrapper.defaultProps = {
  theme: {
    input: {
      iconWrapperColour: Colours.BORDER_COLOUR_DARKER,
    },
  },
};

export const InputField = styled.input<IInputProps>`
  border: ${({ theme }) => theme.input.border};
  border-radius: 4px;
  flex: 1;
  background: white;
  padding: 10px 15px;
  transition: 0.2s all;
  outline: none;
  & + * {
    margin-top: 10px;
  }
  &:disabled {
    background: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    border-color: $primary;
  }
  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder,
  &:-moz-placeholder {
    color: $textSecondary;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5500s ease-in-out 0s !important;
    color: $textBase !important;
    -webkit-text-fill-color: $textBase !important;
  }
  font-size: 0.875rem;

  ${({ errorMessage, theme }) =>
    errorMessage &&
    css`
      border-color: ${theme.input.errorBorderColor};
    `}
`;

InputField.defaultProps = {
  theme: {
    input: {
      border: `${CssVariables.BORDER_DEFAULT}`,
      errorBorderColor: `${Colours.ERROR}`,
    },
  },
};

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.errorMessage.color};
  margin-top: 6px;
  line-height: 1.375rem;
`;

ErrorMessage.defaultProps = {
  theme: {
    errorMessage: {
      color: `${Colours.ERROR}`,
    },
  },
};
