import React, { FC } from 'react';
import { SidebarWrapper, Title, LinksContainer, Link } from './style';

interface ILinks {
  title: string;
  url: string;
  navigate: (url: string) => void;
  order?: number;
  isActive: boolean;
}

export interface ISidebarProps {
  linksTitle?: string;
  links: ILinks[];
  height?: string;
  width?: string;
}

const renderLinks = (links: ILinks[]) => {
  const sortedLinks = links.sort((a, b) => {
    if (!a.order || !b.order) {
      return 0;
    }
    return a.order - b.order;
  });

  return sortedLinks.map(({ title, url, navigate, isActive }, index) => {
    return (
      <Link key={index} onClick={() => navigate(url)} isActive={isActive} data-testid="navigationLink">
        {title}
      </Link>
    );
  });
};

const Sidebar: FC<ISidebarProps> = ({ linksTitle, links, height, width }) => {
  return (
    <SidebarWrapper height={height} width={width}>
      <Title>{linksTitle}</Title>
      <LinksContainer>{renderLinks(links)}</LinksContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
