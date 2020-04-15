import React, { FC } from 'react';
import Checkbox, { ICheckboxProps } from '../Checkbox';

const Toggle: FC<ICheckboxProps> = ({ ...rest }) => <Checkbox toggle {...rest} />;

export default Toggle;
