import React from 'react';
import { render } from '@testing-library/react';
import DatePicker, { IDatePickerProps } from './';

describe('<DatePicker />', () => {
  const getDatePicker = (props?: IDatePickerProps) => {
    const utils = render(<DatePicker {...props} />);
    return { ...utils };
  };

  it('should render', () => {
    const { container } = getDatePicker();
    expect(container).toMatchSnapshot();
  });

  describe('Visuals', () => {
    it('should render a label when one is passed', () => {
      const newProps = { label: 'label' };
      const { queryByTestId } = getDatePicker(newProps);
      const label = queryByTestId('Label-wrapper');
      expect(label).toBeTruthy();
    });
  });
});
