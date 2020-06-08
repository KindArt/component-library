import { HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import { Colours, CssVariables } from '../../constants/styles';
import { ITextAreaProps } from '.';

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ITextAreaField {
  errorMessage?: string;
  ref: any;
}

export const TextAreaField = styled.textarea<ITextAreaField>`
  border: ${({ theme }) => theme.textArea.border};
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 0.875rem;
  resize: none;

  &:disabled {
    background: rgba(62, 63, 66, 0.3);
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${({ theme }) => theme.textArea.focusColour};
  }

  ${({ errorMessage, theme }) =>
    errorMessage &&
    css`
      border-color: ${theme.textArea.errorBorderColor};
    `}

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

TextAreaField.defaultProps = {
  theme: {
    textArea: {
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
