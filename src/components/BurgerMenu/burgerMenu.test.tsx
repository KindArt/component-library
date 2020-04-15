import React from 'react';
import { shallow } from 'enzyme';
import BurgerMenu from '.';

describe('<BurgerMenu />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<BurgerMenu isOpen={false} />);
  });
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
