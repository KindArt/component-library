import styled, { css } from 'styled-components';
import { CssVariables, Typography, Colours } from '../../constants/styles';

interface IWrapper {
  center?: boolean;
}

export const BurgerMenuStyle = css`
  display: none;

  @media (max-width: 768px) {
    display: block;
    border-radius: 0;
    border: none !important;
    border-right: 1px solid #eaedf3 !important;
    width: 56px;
    height: 56px;
    left: 0;
    top: 0;
    font-weight: 600;
    box-shadow: none;
  }
`;

export const TopBarWrapper = styled.div<IWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #ffffff;
  flex-shrink: 0;
  flex-grow: 0;
  border-bottom: ${CssVariables.BORDER_DEFAULT};

  @media (max-width: 768px) {
    height: 56px;
  }

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const linkStyle = css`
  text-decoration: none;
  height: 38px;
  line-height: 38px;
  padding: 0 15px;
  display: block;
  cursor: pointer;
  font-size: 0.875rem;
  color: ${Colours.TEXT_MAIN};
  &:hover {
    color: ${Colours.PRIMARY};
  }
`;

export const CustomLink = styled.div`
  ${linkStyle}
`;

export const Link = styled.a`
  ${linkStyle}
`;

export const Divider = styled.div`
  background: ${Colours.BORDER_COLOUR};
  height: 38px;
  width: 1px;
  margin: 0 30px;
  flex-basis: 1px;
  flex-shrink: 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: ${Typography.DEFAULT_FONT_SIZE};
  color: ${Colours.TEXT_MAIN};
`;
