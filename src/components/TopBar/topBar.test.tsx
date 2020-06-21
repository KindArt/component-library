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

    it('should not render the branding if it is not passed', () => {
      const { queryByTestId } = getTopBar();
      const brand = queryByTestId('TopBar-brand');
      expect(brand).toBeFalsy();
    });

    it('should render links if they are passed', () => {
      const mockNavigate = jest.fn();
      const props = { links: [{ title: 'Link 1', url: '/', navigate: mockNavigate }] };
      const { queryAllByText } = getTopBar(props);
      const link = queryAllByText('Link 1');
      expect(link).toHaveLength(2);
    });

    it('should not render the links if it is not passed', () => {
      const { queryByTestId } = getTopBar();
      const links = queryByTestId('TopBar-links');
      expect(links).toBeFalsy();
    });

    it('should render the actions if they are passed', () => {
      const props = { actions: 'Action' };
      const { queryByText } = getTopBar(props);
      const action = queryByText('Action');
      expect(action).toBeTruthy();
    });

    it('should not render the links if it is not passed', () => {
      const { queryByTestId } = getTopBar();
      const actions = queryByTestId('TopBar-actions');
      expect(actions).toBeFalsy();
    });

    it('should render the burger menu if toggleMenu is passed', () => {
      const { queryByTestId } = getTopBar();
      const burgerMenu = queryByTestId('Button-button');
      expect(burgerMenu).toBeTruthy();
    });

    it('should not render the burger menu if toggleMenu is not passed', () => {
      const { queryByTestId } = getTopBar({ toggleMenu: null });
      const burgerMenu = queryByTestId('Button-button');
      expect(burgerMenu).toBeFalsy();
    });
  });

  describe('Actions', () => {
    it('should call navigate on click', async () => {
      const mockNavigate = jest.fn();
      const props = { links: [{ title: 'Link 1', url: '/', navigate: mockNavigate }] };
      const { getAllByText } = getTopBar(props);
      const link = getAllByText('Link 1')[0];

      await act(async () => {
        await fireEvent.click(link);
      });

      expect(mockNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
