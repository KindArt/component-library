import React from 'react';
import { shallow } from 'enzyme';
import Dropdown, { IDropdownProps } from '.';
import { Label, Button } from '../';
import OptionList from './OptionList';
import { ErrorMessage } from './style';

const defaultProps: IDropdownProps = {
  options: [{ label: 'A label', value: '1' }]
};

describe('<Dropdown />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Dropdown {...defaultProps} />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should display a label if one is passed', () => {
      wrapper.setProps({ label: 'Dropdown' });
      const actual = wrapper.find(Label).length;
      expect(actual).toEqual(1);
    });

    it('should have the button component', () => {
      expect(wrapper.find(Button).length).toEqual(1);
    });

    it('should not display the option list by default', () => {
      expect(wrapper.find(OptionList).length).toEqual(0);
    });

    it('should display the option list when the button is clicked', () => {
      wrapper.find(Button).simulate('click');
      expect(wrapper.find(OptionList).length).toEqual(1);
    });

    it('should not display an error message by default', () => {
      expect(wrapper.find(ErrorMessage).length).toEqual(0);
    });

    it('should display an error message if one is passed', () => {
      wrapper.setProps({ errorMessage: 'This is an error.' });
      expect(wrapper.find(ErrorMessage).length).toEqual(1);
    });

    it('should not show the options list when clicked if disabled is true', () => {
      wrapper.setProps({ disabled: true });
      wrapper.find(Button).simulate('click');
      expect(wrapper.find(OptionList).length).toEqual(0);
    });
  });
});
