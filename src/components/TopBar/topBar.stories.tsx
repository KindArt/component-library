import React from 'react';
import TopBar from '.';

export default {
  component: TopBar,
  title: 'Top Bar'
};

const customNavigationMock = (url: string) => console.log('The url is ', url);

const defaultProps = {
  toggleMenu: () => {},
  isMenuOpen: false,
  title: 'Title',
  links: [
    { title: 'Home', url: '#', order: 1 },
    { title: 'About', url: '#', order: 2, customNavigation: customNavigationMock }
  ]
};

export const normal = () => <TopBar {...defaultProps}></TopBar>;
