import React, { FC, ReactNode } from 'react';
import { Button, BurgerMenu, MobileSidebar } from '../';
import { BurgerMenuStyle, TopBarStyle, Container, Brand, Links, Actions, Link } from './style';
import { ILinks } from 'types';

export interface ITopBarProps {
  brand?: ReactNode;
  links?: ILinks[];
  actions?: ReactNode;
  leftAlign?: boolean;
  toggleMenu?: Function;
  isMenuOpen?: boolean;
  classOverrides?: {
    wrapper?: string;
    linkContainer?: string;
  };
}

const renderLinks: Function = (links: ILinks[]) => {
  const sortedLinks = links.sort((a, b) => {
    if (!a.order || !b.order) {
      return 0;
    }
    return a.order - b.order;
  });

  return sortedLinks.map(({ title, path, navigate }, index) => {
    return (
      <Link key={index} onClick={() => navigate(path)}>
        {title}
      </Link>
    );
  });
};

const TopBar: FC<ITopBarProps> = ({
  brand,
  links,
  actions,
  leftAlign,
  toggleMenu,
  isMenuOpen = false,
  classOverrides,
}) => {
  return (
    <TopBarStyle className={classOverrides && classOverrides.wrapper}>
      {toggleMenu && (
        <Button transparent clear classOverrides={{ buttonWrapper: `${BurgerMenuStyle}` }} onClick={() => toggleMenu()}>
          <BurgerMenu isOpen={isMenuOpen}></BurgerMenu>
        </Button>
      )}
      <Container leftAlign={leftAlign}>
        {brand && (
          <Brand data-testid="TopBar-brand" leftAlign={leftAlign}>
            {brand}
          </Brand>
        )}
        {links && (
          <Links data-testid="TopBar-links" className={classOverrides && classOverrides.linkContainer}>
            {renderLinks(links)}
          </Links>
        )}
        {actions && (
          <Actions data-testid="TopBar-actions" leftAlign={leftAlign}>
            {actions}
          </Actions>
        )}
      </Container>
      {links && <MobileSidebar isVisible={isMenuOpen} closeMenu={toggleMenu} links={links} />}
    </TopBarStyle>
  );
};

export default TopBar;
