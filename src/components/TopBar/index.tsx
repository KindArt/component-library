import React, { FC, ReactNode, useState } from 'react';
import { Button, BurgerMenu } from '../';
import { BurgerMenuStyle, TopBarStyle, Container, Brand, Links, Actions, Link } from './style';

interface ILinks {
  title: string;
  url: string;
  navigate: (url: string) => void;
  order?: number;
}
export interface ITopBar {
  brand?: ReactNode;
  links?: ILinks[];
  actions?: ReactNode;
  leftAlign?: boolean;
  toggleMenu: () => void;
  isMenuOpen: boolean;
  classOverrides?: {
    wrapper?: string;
    links?: string;
  };
}

const renderLinks: Function = (links: ILinks[]) => {
  const sortedLinks = links.sort((a, b) => {
    if (!a.order || !b.order) {
      return 0;
    }
    return a.order - b.order;
  });

  return sortedLinks.map(({ title, url, navigate }, index) => {
    return (
      <Link key={index} onClick={() => navigate(url)}>
        {title}
      </Link>
    );
  });
};

const TopBar: FC<ITopBar> = ({ brand, links, actions, leftAlign, toggleMenu, isMenuOpen }) => {
  return (
    <TopBarStyle>
      <Button transparent clear classOverrides={{ buttonWrapper: `${BurgerMenuStyle}` }} onClick={() => toggleMenu()}>
        <BurgerMenu isOpen={isMenuOpen}></BurgerMenu>
      </Button>
      <Container leftAlign={leftAlign}>
        {brand && <Brand leftAlign={leftAlign}>{brand}</Brand>}
        {links && <Links>{renderLinks(links)}</Links>}
        {actions && <Actions leftAlign={leftAlign}>{actions}</Actions>}
      </Container>
    </TopBarStyle>
  );
};

export default TopBar;
