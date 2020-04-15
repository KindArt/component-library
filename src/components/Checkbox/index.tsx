import React, { FC, ReactNode, HTMLAttributes } from 'react';
import { Wrapper, CheckboxStyle, Label, Description } from './style';
import Check from './check';

export interface ICheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: ReactNode;
  toggle?: boolean;
  radio?: boolean;
  colour?: 'GREEN' | 'BLUE' | 'ORANGE' | 'RED';
  name: string;
  type?: string;
  classOverrides?: {
    wrapper?: string;
    checkbox?: string;
  };
}

const Checkbox: FC<ICheckboxProps> = ({
  label,
  description,
  toggle,
  radio,
  classOverrides,
  colour = 'GREEN',
  name,
  type = 'checkbox',
  ...rest
}) => (
  <Wrapper className={classOverrides && classOverrides.wrapper} toggle={toggle} radio={radio} colour={colour}>
    <CheckboxStyle name={name} type={type} {...rest}></CheckboxStyle>
    <Label colour={colour}>
      {!toggle && !radio && <Check />}
      {label && <span data-test-id="Checkbox-label">{label}</span>}
    </Label>
    {description && <Description>{description}</Description>}
  </Wrapper>
);

export default Checkbox;
