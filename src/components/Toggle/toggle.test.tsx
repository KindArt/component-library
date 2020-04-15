import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './';

describe('<Toggle />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Toggle name="toggle-test" />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should have the toggle prop set to true', () => {
      const actual = wrapper.props().toggle;
      const expected = true;
      expect(actual).toEqual(expected);
    });
  });
});
