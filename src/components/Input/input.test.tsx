import React from 'react';
import { shallow } from 'enzyme';
import Label from '../Label';
import Input from '.';

describe('<Input />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should display a label if one is passed', () => {
      wrapper.setProps({ label: 'Label' });
      const label = wrapper.find(Label);
      const actual = label.prop('content');
      const expected = 'Label';
      expect(actual).toEqual(expected);
    });

    it('should display an icon if one is passed', () => {
      wrapper.setProps({ icon: <div></div> });
      const actual = wrapper.find('[data-testId="Input-icon"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should display an error message if one is passed', () => {
      wrapper.setProps({ errorMessage: 'Error' });
      const actual = wrapper.find('[data-testId="Input-errorMessage"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should default icon placement to the left', () => {
      wrapper.setProps({ icon: <div></div> });
      const icon = wrapper.find('[data-testId="Input-icon"]');
      const actual = icon.prop('iconPosition');
      const expected = 'left';
      expect(actual).toEqual(expected);
    });
  });

  describe('Test Ids', () => {
    it('should set a custom test id for wrapper', () => {
      wrapper.setProps({ testIds: { wrapper: 'customWrapper' } });
      const actual = wrapper.find('[data-testId="Input-customWrapper"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom test id for icon', () => {
      wrapper.setProps({
        testIds: { icon: 'customIcon' },
        icon: <div></div>,
      });
      const actual = wrapper.find('[data-testId="Input-customIcon"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom test id for input', () => {
      wrapper.setProps({ testIds: { input: 'customInput' } });
      const actual = wrapper.find('[data-testId="Input-customInput"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('should set a custom test id for error', () => {
      wrapper.setProps({
        testIds: { errorMessage: 'customError' },
        errorMessage: 'Error',
      });
      const actual = wrapper.find('[data-testId="Input-customError"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });
  });

  describe('Class Overrides', () => {});
});
