import styled from 'styled-components';
import { Colours } from '../../constants/styles';

interface ISidebarWrapperProps {
  height?: string;
  width?: string;
}

export const SidebarWrapper = styled.div<ISidebarWrapperProps>`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => (height ? height : '100vh')};
  width: ${({ width }) => (width ? width : '70vw')};
`;

export const Title = styled.h1`
  margin: 30px 0 0 0;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${Colours.TEXT_SECONDARY};
  padding-left: 20px;
`;

interface ILinkProps {
  isActive: boolean;
}

export const LinksContainer = styled.div`
  margin-top: 20px;
`;

export const Link = styled.div<ILinkProps>`
  color: ${Colours.TEXT_MAIN};
  display: flex;
  align-items: center;
  height: 45px;
  padding-left: ${({ isActive }) => (isActive ? '20px' : '24px')};

  ${({ isActive, theme }) =>
    isActive &&
    `
      border-left: 4px solid ${theme.borderColor};
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
    borderColor: Colours.PRIMARY,
  },
};
