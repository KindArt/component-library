import React from 'react';
import { shallow } from 'enzyme';
import TopBar, { ITopBar } from '.';
import { TitleWrapper, Link, CustomLink } from './style';

const defaultProps: ITopBar = {
  links: [{ title: 'Link 1', url: '#', order: 1 }],
};

describe('<TopBar />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<TopBar {...defaultProps} />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should show a title if one is passed', () => {
      wrapper.setProps({ title: 'Title' });
      expect(wrapper.find(TitleWrapper).text()).toEqual('Title');
    });

    it('should show the correct number of links', () => {
      const links = [
        { title: 'Link 1', url: '#', order: 1 },
        { title: 'Link 2', url: '#', order: 2 },
      ];
      wrapper.setProps({ links });
      expect(wrapper.find(Link).length).toEqual(2);
    });

    it('should show the correct number of custom links', () => {
      const links = [
        { title: 'Link 1', url: '#', customNavigation: () => {}, order: 1 },
        { title: 'Link 2', url: '#', customNavigation: () => {}, order: 2 },
      ];
      wrapper.setProps({ links });
      expect(wrapper.find(CustomLink).length).toEqual(2);
    });

    it('should render the links in the correct order', () => {
      const links = [
        { title: 'Link 3', url: '#', order: 3 },
        { title: 'Link 2', url: '#', order: 2 },
        { title: 'Link 1', url: '#', order: 1 },
      ];
      wrapper.setProps({ links });
      expect(wrapper.find(Link).at(0).text()).toEqual('Link 1');

      expect(wrapper.find(Link).at(1).text()).toEqual('Link 2');

      expect(wrapper.find(Link).at(2).text()).toEqual('Link 3');
    });
  });

  describe('Interactions', () => {
    it('should call customNavigation when clicked', () => {
      const customNavigationMock = jest.fn();
      const url = '#';
      const links = [{ title: 'Link 1', url, customNavigation: customNavigationMock, order: 0 }];
      wrapper.setProps({ links });
      wrapper.find(CustomLink).simulate('click');
      expect(customNavigationMock).toHaveBeenCalledTimes(1);
      expect(customNavigationMock).toHaveBeenCalledWith(url);
    });
  });
});
