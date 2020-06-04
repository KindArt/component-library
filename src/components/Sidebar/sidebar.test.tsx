import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Sidebar, { ISidebarProps } from '.';

describe('<Sidebar />', () => {
  let navigateMock = jest.fn();
  const linksMock = [{ title: 'Link 1', url: '/', navigate: navigateMock, isActive: false }];

  const getSidebar = (props?: any) => {
    const defaultProps: ISidebarProps = {
      links: linksMock,
      ...props,
    };

    const utils = render(<Sidebar {...defaultProps} />);
    return { ...utils };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const { container } = getSidebar();
    expect(container).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should have the correct amount of links', () => {
      const newProps = {
        links: [{ title: 'Link 2', url: '/', navigate: navigateMock, isActive: false }, ...linksMock],
      };

      const { queryAllByTestId } = getSidebar(newProps);
      const totalLinks = queryAllByTestId('navigationLink').length;
      expect(totalLinks).toEqual(2);
    });

    it('should have a links title if one is passed', () => {
      const newProps = { linksTitle: 'Title' };
      const { queryByText } = getSidebar(newProps);
      const title = queryByText('Title');
      expect(title).toBeTruthy();
    });
  });

  describe('Actions', () => {
    it('should call navigateMock on click', async () => {
      const { getByText } = getSidebar();
      const link = getByText('Link 1');

      await act(async () => {
        await fireEvent.click(link);
      });

      expect(navigateMock).toHaveBeenCalledTimes(1);
    });
  });
});
