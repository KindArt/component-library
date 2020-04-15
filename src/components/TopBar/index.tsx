import React, { FC, ReactNode, useState } from 'react';
import { Button, BurgerMenu } from '../';
import {
  TopBarWrapper,
  Section,
  Divider,
  BurgerMenuStyle,
  TitleWrapper,
  LinkContainer,
  CustomLink,
  Link
} from './style';

interface ILinks {
  title: string;
  url: string;
  customNavigation?: (url: string) => void;
  order: number;
}
export interface ITopBar {
  center?: boolean;
  className?: string;
  title?: ReactNode;
  links: ILinks[];
}

const renderLinks: Function = (links: ILinks[]) => {
  const sortedLinks = links.sort((a, b) => a.order - b.order);

  return sortedLinks.map(({ title, url, customNavigation }, index) => {
    if (customNavigation) {
      return (
        <CustomLink key={index} onClick={() => customNavigation(url)}>
          {title}
        </CustomLink>
      );
    } else {
      return (
        <Link key={index} href={url}>
          {title}
        </Link>
      );
    }
  });
};

const TopBar: FC<ITopBar> = ({ center, className, title, links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <TopBarWrapper center={center} className={className}>
      <Button
        transparent
        classOverrides={{ buttonWrapper: `${BurgerMenuStyle}` }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <BurgerMenu isOpen={isMenuOpen}></BurgerMenu>
      </Button>
      <Section>
        {title && <TitleWrapper>{title}</TitleWrapper>}
        <Divider />
        <LinkContainer>{renderLinks(links)}</LinkContainer>
      </Section>
    </TopBarWrapper>
  );
};

export default TopBar;
