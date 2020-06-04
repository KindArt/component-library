import styled, { css } from 'styled-components';
import { MediaQueries, CssVariables, Typography, Colours } from '../../constants/styles';

interface ITopBarProps {
  leftAlign?: boolean;
}

export const BurgerMenuStyle = css`
  display: none;

  @media (max-width: 768px) {
    display: block;
    border: none !important;
  }
`;

export const TopBarStyle = styled.div<ITopBarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: ${Colours.TEXT_MAIN};
`;

export const Container = styled.div<ITopBarProps>`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: ${MediaQueries.mobileContainerWidth};

  @media (min-width: ${MediaQueries.tabletBreakpointWidth}) {
    width: ${MediaQueries.tabletContainerWidth};
  }

  @media (min-width: ${MediaQueries.desktopBreakpointWidth}) {
    width: ${MediaQueries.desktopContainerWidth};
  }

  ${({ leftAlign }) =>
    leftAlign &&
    css`
      justify-content: left;
    `}
`;

export const Brand = styled.div<ITopBarProps>`
  display: flex;
  align-items: center;
  font-size: 1.25rem;

  ${({ leftAlign }) =>
    leftAlign &&
    css`
      margin-right: 20px;
    `}
`;

export const Links = styled.div`
  display: none;
  font-size: ${Typography.DEFAULT_FONT_SIZE};

  @media (min-width: ${MediaQueries.tabletBreakpointWidth}) {
    display: flex;
    align-items: stretch;
  }
`;

export const Actions = styled.div<ITopBarProps>`
  display: flex;
  align-items: center;

  ${({ leftAlign }) =>
    leftAlign &&
    css`
      margin-left: auto;
    `}
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :not(:last-child) {
    padding-right: 10px;
  }

  :hover {
    color: ${Colours.TEXT_SECONDARY};
  }
`;
