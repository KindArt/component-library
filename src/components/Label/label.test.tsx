import React from 'react';
import { shallow } from 'enzyme';
import Label from '.';

describe('<Label />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Label content="This is a label" />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Test Ids', () => {
    it('should set a custom test id for wrapper', () => {
      wrapper.setProps({ testIds: { wrapper: 'customWrapper' } });
      const actual = wrapper.find('[data-testId="Label-customWrapper"]').length;
      const expected = 1;
      expect(actual).toEqual(expected);
    });
  });

  describe('Class Overrides', () => {
    it('should override the wrapper class', () => {
      wrapper.setProps({ classOverrides: { wrapper: 'override' } });
      const actual = wrapper.find('[data-testId="Label-wrapper"]').hasClass('override');
      expect(actual).toBeTruthy();
    });
  });
});
