import React, { FC } from 'react';
import { BurgerMenuWrapper, TopLine, MiddleLine, BottomLine } from './style';
import LongLine from './longLine';

interface IBurgerMenu {
  className?: string;
  isOpen: boolean;
}

const BurgerMenu: FC<IBurgerMenu> = ({ className, isOpen }) => (
  <BurgerMenuWrapper className={className}>
    <TopLine fill="currentColor" height="2px" version="1.1" viewBox="0 0 20 2" width="20px" isOpen={isOpen}>
      <LongLine />
    </TopLine>
    <MiddleLine fill="currentColor" height="2px" version="1.1" viewBox="0 0 20 2" width="20px" isOpen={isOpen}>
      <LongLine />
    </MiddleLine>
    <BottomLine fill="currentColor" height="2px" version="1.1" viewBox="0 0 20 2" width="20px" isOpen={isOpen}>
      <LongLine />
    </BottomLine>
  </BurgerMenuWrapper>
);

export default BurgerMenu;
