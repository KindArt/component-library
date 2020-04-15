import React, { FC } from 'react';
import Checkbox, { ICheckboxProps } from '../Checkbox';

const RadioButton: FC<ICheckboxProps> = ({ ...rest }) => <Checkbox radio={true} type="radio" {...rest} />;

export default RadioButton;
