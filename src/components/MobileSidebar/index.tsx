import React, { FC, ReactNode } from 'react';
import { MobileSidebarWrapper, CloseButton, TopContent, Content, Title, LinksContainer, Link } from './style';
import { ILinks } from 'types';

export interface IMobileSidebarProps {
  isVisible: boolean;
  closeMenu?: Function;
  linksTitle?: string;
  links: ILinks[];
  topContent?: ReactNode;
  classOverrides?: {
    wrapper?: string;
    title?: string;
    linksContainer?: string;
  };
}

const renderLinks = (links: ILinks[], closeMenu?: Function) => {
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

const MobileSidebar: FC<IMobileSidebarProps> = ({
  isVisible,
  closeMenu,
  linksTitle,
  links,
  topContent,
  classOverrides,
}) => {
  return (
    <MobileSidebarWrapper className={classOverrides && classOverrides.wrapper} isVisible={isVisible}>
      {closeMenu && <CloseButton onClick={() => closeMenu()}>&times;</CloseButton>}
      {topContent && <TopContent>{topContent}</TopContent>}
      <Content>
        <Title className={classOverrides && classOverrides.title}>{linksTitle}</Title>
        <LinksContainer className={classOverrides && classOverrides.linksContainer}>
          {renderLinks(links, closeMenu)}
        </LinksContainer>
      </Content>
    </MobileSidebarWrapper>
  );
};

export default MobileSidebar;
