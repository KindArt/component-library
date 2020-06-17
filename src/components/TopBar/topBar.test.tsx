import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import TopBar, { ITopBarProps } from '.';

describe('<TopBar />', () => {
  let toggleMenuMock = jest.fn();

  const getTopBar = (props?: any) => {
    const defaultProps: ITopBarProps = {
      toggleMenu: toggleMenuMock,
      isMenuOpen: false,
      ...props,
    };
    const utils = render(<TopBar {...defaultProps} />);
    return { ...utils };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const { container } = getTopBar();
    expect(container).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should render the branding if it is passed', () => {
      const props = { brand: 'Branding' };
      const { queryByText } = getTopBar(props);
      const brandText = queryByText('Branding');
      expect(brandText).toBeTruthy();
    });

    it('should render links if they are passed', () => {
      const mockNavigate = jest.fn();
      const props = { links: [{ title: 'Link 1', url: '/', navigate: mockNavigate }] };
      const { queryByText } = getTopBar(props);
      const link = queryByText('Link 1');
      expect(link).toBeTruthy();
    });

    it('should render the actions if they are passed', () => {
      const props = { actions: 'Action' };
      const { queryByText } = getTopBar(props);
      const action = queryByText('Action');
      expect(action).toBeTruthy();
    });
  });

  describe('Actions', () => {
    it('should call navigate on click', async () => {
      const mockNavigate = jest.fn();
      const props = { links: [{ title: 'Link 1', url: '/', navigate: mockNavigate }] };
      const { getByText } = getTopBar(props);
      const link = getByText('Link 1');

      await act(async () => {
        await fireEvent.click(link);
      });

      expect(mockNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
