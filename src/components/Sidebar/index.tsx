import React, { FC, ReactNode } from 'react';
import { SidebarWrapper, CloseButton, TopContent, Content, Title, LinksContainer, Link } from './style';
import { ILinks } from 'types';

export interface ISidebarProps {
  isVisible?: boolean;
  closeMenu?: () => void;
  linksTitle?: string;
  links: ILinks[];
  topContent?: ReactNode;
  classOverrides?: {
    wrapper?: string;
    title?: string;
    linksContainer?: string;
  };
}

const renderLinks = (links: ILinks[], closeMenu?: () => void) => {
  const sortedLinks = links.sort((a, b) => {
    if (!a.order || !b.order) {
      return 0;
    }
    return a.order - b.order;
  });

  return sortedLinks.map(({ title, path, navigate, isActive }, index) => {
    const handleNavigation = () => {
      navigate(path);
      closeMenu && closeMenu();
    };

    return (
      <Link key={index} onClick={handleNavigation} isActive={isActive} data-testid="navigationLink">
        {title}
      </Link>
    );
  });
};

const Sidebar: FC<ISidebarProps> = ({ isVisible = true, closeMenu, linksTitle, links, topContent, classOverrides }) => {
  return (
    <SidebarWrapper className={classOverrides && classOverrides.wrapper} isVisible={isVisible}>
      {closeMenu && <CloseButton onClick={closeMenu}>&times;</CloseButton>}
      {topContent && <TopContent>{topContent}</TopContent>}
      <Content>
        <Title className={classOverrides && classOverrides.title}>{linksTitle}</Title>
        <LinksContainer className={classOverrides && classOverrides.linksContainer}>
          {renderLinks(links, closeMenu)}
        </LinksContainer>
      </Content>
    </SidebarWrapper>
  );
};

export default Sidebar;
