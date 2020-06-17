import React, { FC, ReactNode } from 'react';
import { Button, BurgerMenu } from '../';
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
        {brand && <Brand leftAlign={leftAlign}>{brand}</Brand>}
        {links && <Links className={classOverrides && classOverrides.linkContainer}>{renderLinks(links)}</Links>}
        {actions && <Actions leftAlign={leftAlign}>{actions}</Actions>}
      </Container>
    </TopBarStyle>
  );
};

export default TopBar;
