import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ButtonSize, IButtonProps } from './';
import { Colours } from '../../constants/styles';

interface IIconWrapper {
  icon?: ReactNode;
  iconRight?: boolean;
  iconOnly: boolean;
}

export const IconWrapper = styled.span<IIconWrapper>`
  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

interface IButtonWrapper extends IButtonProps {
  iconOnly: boolean;
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
  display: inline-flex;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  height: 38px;
  padding: 0 18px;
  transition: all 0.1s ease-in-out 0s;
  font-size: 0.875rem;
  font-weight: 400;
  position: relative;

  i {
    opacity: .8;
  }

  ${({ icon }) =>
    icon &&
    css`
      padding-left: 40px;
      ${IconWrapper} {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        font-size: 18px;
      }
    `}

  ${({ icon, iconRight }) =>
    icon &&
    iconRight &&
    css`
      padding-right: 40px;
      padding-left: 18px;
      ${IconWrapper} {
        left: auto;
        right: 12px;
      }
    `}

  ${({ iconOnly }) =>
    iconOnly &&
    css`
      padding: 0;
      justify-content: center;
      flex-basis: 38px;
      width: 38px;
      flex-shrink: 0;
      ${IconWrapper} {
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    `}

  ${({ fullWidth, icon }) => {
    if (fullWidth && icon) {
      return css`
        width: 100%;
        padding-left: 40px;
        padding-right: 40px;
      `;
    } else if (fullWidth) {
      return css`
        width: 100%;
      `;
    }
  }}

  &>* {
    transition: .1s all;
  }

  ${({ size }) =>
    size === ButtonSize.Small &&
    css`
      height: 28px;
      padding: 0 15px;
      font-size: 0.75rem;
    `}

  ${({ size }) =>
    size === ButtonSize.Large &&
    css`
      height: 48px;
      padding: 0 40px;
      font-size: 1rem;
    `}

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active {
    border: 1px solid #eee;
    box-shadow: none;
    transform: translateY(0px);
  }

  /* Basic Appearence */
  background: #FFFFFF;
  background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);
  border: 1px solid $borderColorDarker;
  box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.05),
  inset 0 2px 0 0 rgba(255, 255, 255, 0.05);
  color: $textMain;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);
    border: 1px solid #CACEDB;
    box-shadow: 0 1px 2px 0 rgba(22, 29, 37, 0.10), inset 0 2px 0 0 rgba(255, 255, 255, 0.05);
  }

  &:focus {
    background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);
    border: 1px solid #BDC2D1;
    box-shadow: 0 0 1px 0 rgba(22, 29, 37, 0.10), inset 0 2px 0 0 rgba(255, 255, 255, 0.05);
  }

  ${({ noBorder }) =>
    noBorder &&
    css`
      border: none !important;
      background: white;
      box-shadow: none;
      &:hover {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.13);
      }
      &:focus {
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
      }
    `}
  
  /* Colors */
  ${({ primary, noBorder }) =>
    primary &&
    css`
      color: white;
      background: ${({ theme }) => theme.buttonWrapper.primary.background};
      background-image: linear-gradient(-1deg, #1665d8 2%, #1f6fe5 98%);
      background-image: linear-gradient(0deg, #1665d8 0%, #1f6fe5 100%);
      border: 1px solid #1461d2;
      box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06);
      &:hover {
        background-image: linear-gradient(0deg, #115ecf 0%, #1767db 100%);
        border: 1px solid #0e57c2;
        ${noBorder
          ? `box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.18);`
          : `box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06);`}
      }
      &:focus {
        background-image: linear-gradient(0deg, #0e55bd 0%, #0f5bca 100%);
        border: 1px solid #0b4aa5;
        ${noBorder
          ? `box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.10);`
          : `box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.10), inset 0 2px 0 0 rgba(255, 255, 255, 0.06);`}
      }
    `}

  ${({ warning, noBorder }) =>
    warning &&
    css`
      color: white;
      background: ${({ theme }) => theme.buttonWrapper.warning.background};
      background-image: linear-gradient(-180deg, #e73c1e 0%, #cf3014 100%);
      border: 1px solid #ba0b15;
      box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.08);
      &:hover {
        background-image: linear-gradient(-180deg, #df3517 0%, #c42b10 100%);
        border: 1px solid #b00b14;
        ${noBorder
          ? `box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.18);`
          : `box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.08);`}
      }
      &:focus {
        background-image: linear-gradient(-179deg, #c22b10 0%, #b8280e 100%);
        border: 1px solid #a00a13;
        border-radius: 4px;
        ${noBorder
          ? `box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.10);`
          : `box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.10), inset 0 2px 0 0 rgba(255, 255, 255, 0.08);`}
      }
    `}

  ${({ success, noBorder }) =>
    success &&
    css`
      color: white;
      background: ${({ theme }) => theme.buttonWrapper.success.background};
      background-image: linear-gradient(0deg, #34aa44 0%, #38b249 100%);
      border: 1px solid #2d9c3c;
      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06);
      &:hover {
        background-image: linear-gradient(0deg, #2ca13c 2%, #2fae40 100%);
        border: 1px solid #259835;
        ${noBorder
          ? `box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18);`
          : `box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06);`}
      }
      &:focus {
        background-image: linear-gradient(0deg, #259835 0%, #27a337 100%);
        border: 1px solid #1a8628;
        ${noBorder
          ? `box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.10);`
          : `box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.10), inset 0 2px 0 0 rgba(255, 255, 255, 0.06);`}
      }
    `}

  ${({ transparent }) =>
    transparent &&
    css`
      background: transparent;
      border: 1px solid #e2e5ed;
      box-shadow: none;
      &:hover {
        background-image: none;
        border: none;
        box-shadow: none;
        border: 1px solid #cacedb;
      }
      &:focus {
        background-image: none;
        border: 1px solid #bdc2d1;
      }
    `}

  // Button without background and without hover or effect
  ${({ clear }) =>
    clear &&
    css`
      background: transparent;
      border: none;
      outline: none;
      box-shadow: none;
      color: ${({ theme }) => theme.buttonWrapper.clear.text};
      &:hover {
        color: ${({ theme }) => theme.buttonWrapper.clear.textHover};
      }
    `}

  &:disabled {
    cursor: not-allowed;
    &.icon {
      opacity: 0.3;
    }
    background: #747578;
    border: 1px solid #696A6E;
    box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    color: $textSecondary;
  } //icon inisde the button

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

ButtonWrapper.defaultProps = {
  theme: {
    buttonWrapper: {
      primary: {
        background: `${Colours.PRIMARY}`
      },
      warning: {
        background: `${Colours.WARNING}`
      },
      success: {
        background: `${Colours.SUCCESS}`
      },
      clear: {
        text: `${Colours.TEXT_SECONDARY}`,
        textHover: `${Colours.TEXT_BASE}`
      }
    }
  }
};

export const ContentWrapper = styled.span`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;
