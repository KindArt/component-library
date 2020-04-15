import React from 'react';
import { shallow } from 'enzyme';
import Label from '.';

describe('<Label />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Label content="This is a label" />)
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
