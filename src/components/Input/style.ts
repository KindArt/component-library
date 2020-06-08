import styled, { css } from 'styled-components';
import { HTMLProps } from 'react';
import { Colours, CssVariables } from '../../constants/styles';
import { IInputProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
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

  ${({ className }) =>
    className &&
    css`
      ${className}
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
  padding: 10px 15px;
  font-size: 0.875rem;

  &:disabled {
    background: rgba(62, 63, 66, 0.3);
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({ theme }) => theme.input.focusColour};
  }

  ${({ errorMessage, theme }) =>
    errorMessage &&
    css`
      border-color: ${theme.input.errorBorderColor};
    `}

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

InputField.defaultProps = {
  theme: {
    input: {
      border: `${CssVariables.BORDER_DEFAULT}`,
      errorBorderColor: `${Colours.ERROR}`,
      focusColour: `${Colours.PRIMARY}`,
    },
  },
};

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.errorMessage.color};
  margin-top: 6px;
  margin-bottom: 0;
  line-height: 1.375rem;

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

ErrorMessage.defaultProps = {
  theme: {
    errorMessage: {
      color: `${Colours.ERROR}`,
    },
  },
};
