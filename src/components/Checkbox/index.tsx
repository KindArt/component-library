import React, { FC, ReactNode, HTMLProps } from 'react';
import { Wrapper, CheckboxStyle, Label, Description } from './style';
import Check from './check';

export interface ICheckboxProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  description?: ReactNode;
  toggle?: boolean;
  radio?: boolean;
  colour?: 'GREEN' | 'BLUE' | 'ORANGE' | 'RED';
  name: string;
  classOverrides?: {
    wrapper?: string;
    checkbox?: string;
    labelWrapper?: string;
    label?: string;
    description?: string;
  };
  testIds?: {
    wrapper?: string;
    checkbox?: string;
    labelWrapper?: string;
    label?: string;
    description?: string;
  };
}

enum ElementIdentifiers {
  wrapper = 'wrapper',
  checkbox = 'checkbox',
  labelWrapper = 'labelWrapper',
  label = 'label',
  description = 'description',
}

const componentName = 'Checkbox';

const Checkbox: FC<ICheckboxProps> = ({
  id,
  label,
  description,
  toggle,
  radio,
  colour = 'GREEN',
  name,
  classOverrides,
  testIds,
  type = 'checkbox',
  ...props
}) => {
  const tidPrefix = id || componentName;
  const tid = {
    wrapper: (testIds && testIds.wrapper) || ElementIdentifiers.wrapper,
    checkbox: (testIds && testIds.checkbox) || ElementIdentifiers.checkbox,
    labelWrapper: (testIds && testIds.labelWrapper) || ElementIdentifiers.labelWrapper,
    label: (testIds && testIds.label) || ElementIdentifiers.label,
    description: (testIds && testIds.description) || ElementIdentifiers.description,
  };
  return (
    <Wrapper
      className={classOverrides && classOverrides.wrapper}
      data-testId={`${tidPrefix}-${tid.wrapper}`}
      toggle={toggle}
      radio={radio}
      colour={colour}
    >
      <CheckboxStyle
        className={classOverrides && classOverrides.checkbox}
        data-testId={`${tidPrefix}-${tid.checkbox}`}
        name={name}
        type={type}
        {...(props as any)}
      ></CheckboxStyle>
      <Label
        className={classOverrides && classOverrides.labelWrapper}
        data-testId={`${tidPrefix}-${tid.labelWrapper}`}
        colour={colour}
      >
        {!toggle && !radio && <Check />}
        {label && (
          <span className={classOverrides && classOverrides.label} data-testId={`${tidPrefix}-${tid.label}`}>
            {label}
          </span>
        )}
      </Label>
      {description && (
        <Description
          className={classOverrides && classOverrides.description}
          data-testId={`${tidPrefix}-${tid.description}`}
        >
          {description}
        </Description>
      )}
    </Wrapper>
  );
};

export default Checkbox;
