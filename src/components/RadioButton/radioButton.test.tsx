import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './';

describe('<RadioButton />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<RadioButton name="radioButton-test" />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should have the radio prop set to true', () => {
      const actual = wrapper.props().radio;
      const expected = true;
      expect(actual).toEqual(expected);
    });

    it('should have the type prop set to radio', () => {
      const actual = wrapper.props().type;
      const expected = 'radio';
      expect(actual).toEqual(expected);
    });
  });
});
