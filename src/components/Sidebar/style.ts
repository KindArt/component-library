import styled, { css } from 'styled-components';
import { Colours } from '../../constants/styles';

interface ISidebarWrapperProps {
  height?: string;
  width?: string;
  isVisible: boolean;
}

export const SidebarWrapper = styled.div<ISidebarWrapperProps>`
  z-index: 99;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  border-right: 1px solid ${Colours.BORDER_COLOUR};
  background-color: ${({ theme }) => theme.sidebar.backgroundColour};
  height: 100vh;
  width: 70vw;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
    `}

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

SidebarWrapper.defaultProps = {
  theme: {
    sidebar: {
      backgroundColour: '#252529',
    },
  },
};

export const CloseButton = styled.div`
  color: ${({ theme }) => theme.sidebar.cross.colour};
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
`;

CloseButton.defaultProps = {
  theme: {
    sidebar: {
      cross: {
        colour: '#FFF',
      },
    },
  },
};

export const TopContent = styled.div``;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h1`
  margin: 30px 0 0 0;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${Colours.TEXT_SECONDARY};
  padding-left: 20px;

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

export const LinksContainer = styled.div`
  margin-top: 10px;

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

interface ILinkProps {
  isActive: boolean;
}

export const Link = styled.div<ILinkProps>`
  color: ${({ theme }) => theme.sidebar.links.textColour};
  display: flex;
  align-items: center;
  height: 45px;
  padding-left: ${({ isActive }) => (isActive ? '20px' : '24px')};

  ${({ isActive, theme }) =>
    isActive &&
    `
      border-left: 4px solid ${theme.sidebar.links.borderColour};
      border-top: 1px solid rgba(22, 101, 216, 0.2);
      border-bottom: 1px solid rgba(22, 101, 216, 0.2);
      background-color: rgba(22, 101, 216, 0.08);
  `}

  :hover {
    cursor: pointer;
    color: ${Colours.PRIMARY};
  }
`;

Link.defaultProps = {
  theme: {
    sidebar: {
      links: {
        textColour: '#FFF',
        borderColour: Colours.PRIMARY,
      },
    },
  },
};
