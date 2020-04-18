import styled, { css } from 'styled-components';
import { Colours, Typography } from '../../constants/styles';

export const CheckboxIcon = styled.svg``;

export const Description = styled.p`
  margin-top: 2px;
  margin-left: 26px;
  color: ${Colours.TEXT_SECONDARY};
`;

interface ILabel {
  colour?: 'GREEN' | 'BLUE' | 'ORANGE' | 'RED';
}

export const Label = styled.div<ILabel>`
  color: ${Colours.TEXT_BASE};
  font-size: ${Typography.LABEL_FONT_SIZE};
  line-height: 19px;
  display: inline-flex;
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${Colours.TEXT_MAIN};
  }
`;

export const CheckboxStyle = styled.input`
  width: 0px;
  height: 0px;
  overflow: hidden;
  position: absolute;
  visibility: hidden;

  &:checked + ${Label} {
    color: ${Colours.TEXT_MAIN};
    &:hover {
      color: ${Colours.TEXT_BASE};
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      ${Label} {
        cursor: not-allowed;
      }
    `}
`;

interface IWrapper {
  toggle?: boolean;
  radio?: boolean;
  colour: 'GREEN' | 'BLUE' | 'ORANGE' | 'RED';
}

export const Wrapper = styled.label<IWrapper>`
  display: inline-block;
  line-height: 17px;
  user-select: none;

  ${({ toggle, radio, colour }) => {
    if (toggle) {
      return css`
        ${Description} {
          margin-left: 50px;
        }

        ${Label} {
          &:before,
          &:after {
            content: '';
            display: block;
            border-radius: 100px;
            transition: 0.2s;
          }
          &:before {
            width: 38px;
            height: 20px;
            background: ${Colours.BORDER_COLOUR};
            border: 1px solid ${Colours.BORDER_COLOUR};
            margin-right: 12px;
          }
          &:after {
            height: 16px;
            width: 16px;
            background: #ffffff;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
            position: absolute;
            top: 2px;
            left: 2px;
          }
        }

        ${CheckboxStyle}:checked+${Label} {
          &:before {
            border: 1px solid #2f9e3e;
            background-color: ${Colours[colour]};
            border-color: ${Colours[colour]};
          }
          &:after {
            transform: translateX(18px);
          }
        }
        ${CheckboxStyle}[disabled]+${Label} {
          &:after {
            opacity: 0.6;
          }
        }
      `;
    }

    if (radio) {
      return css`
        ${Label} {
          &:before,
          &:after {
            content: '';
            display: block;
            border-radius: 100px;
            transition: 0.2s;
          }
          &:before {
            margin-right: 10px;
            width: 16px;
            height: 16px;
            /* Radio: */
            background-image: linear-gradient(0deg, #f6f7f9 0%, #ffffff 100%);
            border: 1px solid #d8dce6;
            box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.05), inset 0 2px 0 0 rgba(255, 255, 255, 0.05);
          }
          &:after {
            height: 6px;
            width: 6px;
            background: #ffffff;
            position: absolute;
            top: 6px;
            left: 6px;
            opacity: 0;
          }
        }

        ${CheckboxStyle}:checked+${Label} {
          &:before {
            background-image: linear-gradient(0deg, ${Colours[colour]} 0%, ${Colours[colour]} 100%);
            border: 1px solid ${Colours[colour]};
            box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06);
          }
          &:after {
            opacity: 1;
          }
        }
        ${CheckboxStyle}[disabled]+${Label} {
          &:before {
            background: rgba(#bcbcbc, 0.25);
          }
        }
      `;
    }

    if (!toggle && !radio) {
      return css`
        ${Label} {
          &:before {
            text-align: center;
            line-height: 14px;
            padding-left: 1px;
            color: #fff;
            width: 16px;
            height: 16px;
            content: '';
            font-size: 7px;
            background-color: #fff;
            border: 1px solid #dfe3e9;
            border-radius: 3px;
            margin-right: 10px;
            display: inline-block;
            transition: border 0.2s, background 0.2s;
            vertical-align: middle;
            transform: translateY(1px);
          }
          ${CheckboxIcon} {
            position: absolute;
            left: 5px;
            top: 7px;
            display: none;
          }
        }
        ${CheckboxStyle}[disabled] + ${Label}:before {
          /* Checkbox: */
          background-image: linear-gradient(0deg, #f6f7f9 0%, #ffffff 100%);
          border: 1px solid ${Colours.BORDER_COLOUR_DARKER};
          box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.05), inset 0 2px 0 0 rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          /* Rectangle: */
          background: rgba(#bcbcbc, 0.25);
        }
        ${CheckboxStyle}:checked + ${Label} {
          &:before {
            color: white;
            background-color: ${Colours[colour]};
            border-color: ${Colours[colour]};
          }
          ${CheckboxIcon} {
            display: block;
          }
        }
      `;
    }
  }}

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;
