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

  describe('Visuals', () => {
    it('should render a label if one is passed', () => {
      const { queryByText } = getTextArea({ label: 'Label' });
      const label = queryByText('Label');
      expect(label).toBeTruthy();
    });

    it('should not render a label if one is not passed', () => {
      const { queryByTestId } = getTextArea();
      const label = queryByTestId('Label-wrapper');
      expect(label).toBeFalsy();
    });

    it('should display an error message if one is passed', () => {
      const { queryByText } = getTextArea({ errorMessage: 'This is an error' });
      const error = queryByText('This is an error');
      expect(error).toBeTruthy();
    });

    it('should not display an error if it is not passed', () => {
      const { queryByTestId } = getTextArea();
      const error = queryByTestId('TextArea-errorMessage');
      expect(error).toBeFalsy();
    });
  });
});
