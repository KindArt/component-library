import React from 'react';
import { render } from '@testing-library/react';
import TextArea from '.';

describe('<TextArea />', () => {
  const getTextArea = (props?: any) => {
    const utils = render(<TextArea {...props} />);
    return { ...utils };
  };

  it('should render', () => {
    const { container } = getTextArea();
    expect(container).toMatchSnapshot();
  });
});
