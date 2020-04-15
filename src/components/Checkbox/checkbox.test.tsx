import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from '../';
import { Description } from './style';
import Check from './check';

describe('<Checkbox />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Checkbox name="test" />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should display a label if one is passed', () => {
      wrapper.setProps({ label: 'This is a label' });
      const actual = wrapper.find('[data-test-id="Checkbox-label"]').text();
      const expected = 'This is a label';
      expect(actual).toEqual(expected);
    });

    it('should display a description if one is passed', () => {
      wrapper.setProps({ description: 'This is a description' });
      const actual = wrapper.find(Description).text();
      const expected = 'This is a description';
      expect(actual).toEqual(expected);
    });

    it('should display a check by default', () => {
      expect(wrapper.find(Check).length).toEqual(1);
    });

    it('should not display a check if toggle is passed', () => {
      wrapper.setProps({ toggle: true });
      expect(wrapper.find(Check).length).toEqual(0);
    });

    it('should not display a check if radio is passed', () => {
      wrapper.setProps({ radio: true });
      expect(wrapper.find(Check).length).toEqual(0);
    });
  });
});
