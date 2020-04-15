import styled, { css } from 'styled-components';
import { Colours } from '../../constants/styles';

interface IWrapper {
  isOpen?: boolean;
}

export const BurgerMenuWrapper = styled.div<IWrapper>`
  height: 20px;
  width: 20px;
  position: relative;
  color: ${Colours.TEXT_SECONDARY};

  ${({ isOpen }) => isOpen && css``}
`;

interface ILongLineSVG {
  isOpen: boolean;
}

export const TopLine = styled.svg<ILongLineSVG>`
  position: absolute;
  fill: currentColor;
  transform: rotate(0);
  transition: 0.2s top 0.4s, 0.1s left 0.2s, 0.2s transform, 0.2s opacity 0.2s;

  left: 0;
  top: 2px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transition: 0.2s opacity, 0.2s top, 0.2s left 0.2s, 0.2s transform 0.4s;

      right: auto;
      left: 3px;
      top: 9px;

      transform: rotate(-45deg);
    `}
`;

export const MiddleLine = styled.svg<ILongLineSVG>`
  position: absolute;
  fill: currentColor;
  transform: rotate(0);
  transition: 0.2s top 0.4s, 0.1s left 0.2s, 0.2s transform, 0.2s opacity 0.2s;

  top: 9px;
  left: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transition: 0.2s opacity, 0.2s top, 0.2s left 0.2s, 0.2s transform 0.4s;

      opacity: 0;
    `}
`;

export const BottomLine = styled.svg<ILongLineSVG>`
  position: absolute;
  fill: currentColor;
  transform: rotate(0);
  transition: 0.2s top 0.4s, 0.1s left 0.2s, 0.2s transform, 0.2s opacity 0.2s;

  left: 0;
  top: 16px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transition: 0.2s opacity, 0.2s top, 0.2s left 0.2s, 0.2s transform 0.4s;
      right: auto;
      left: 3px;
      top: 9px;

      transform: rotate(45deg);
    `}
`;
