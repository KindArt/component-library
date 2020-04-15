import React from 'react';
import Dropdown, { DropdownOptionType } from '.';

export default {
  component: Dropdown,
  title: 'Dropdown',
  decorators: [(storyFn: any) => <div style={{ maxWidth: '50%' }}>{storyFn()}</div>]
};

const optionsMock: Array<DropdownOptionType> = [
  { label: 'GBP', value: '1' },
  { label: 'CHF', value: '2' },
  { label: 'JPY', value: '3' }
];

export const normal = () => <Dropdown options={optionsMock} />;

export const multipleSelection = () => <Dropdown options={optionsMock} multipleSelection />;

export const empty = () => <Dropdown options={[]} />;

export const errorState = () => <Dropdown options={optionsMock} errorMessage="This is an error!" />;
