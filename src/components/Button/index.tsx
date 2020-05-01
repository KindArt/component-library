import React, { FC, HTMLProps } from 'react';
import { ButtonWrapper, ContentWrapper, IconWrapper } from './style';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

enum ElementIdentifiers {
  button = 'button',
  icon = 'icon',
  content = 'content',
}

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  success?: boolean;
  /** Transparent background */
  transparent?: boolean;
  /** Without background and without hover or effect */
  clear?: boolean;
  disabled?: boolean;
  buttonSize?: ButtonSize;
  icon?: React.ReactNode;
  iconRight?: boolean;
  fullWidth?: boolean;
  noBorder?: boolean;
  testIds?: {
    button?: string;
    icon?: string;
    content?: string;
  };
  classOverrides?: {
    buttonWrapper?: string;
    icon?: string;
    contentWrapper?: string;
  };
}

const componentName = 'Button';

const Button: FC<IButtonProps> = ({
  id,
  children,
  testIds,
  buttonSize = ButtonSize.Medium,
  icon,
  iconRight,
  classOverrides,
  type = 'button',
  ...props
}) => {
  const tidPrefix = id || componentName;
  const tid = {
    button: (testIds && testIds.button) || ElementIdentifiers.button,
    icon: (testIds && testIds.icon) || ElementIdentifiers.icon,
    content: (testIds && testIds.content) || ElementIdentifiers.content,
  };
  const iconOnly = !!(!children && icon);

  return (
    <ButtonWrapper
      className={classOverrides && classOverrides.buttonWrapper}
      data-testid={`${tidPrefix}-${tid.button}`}
      buttonSize={buttonSize}
      icon={icon}
      iconRight={iconRight}
      iconOnly={iconOnly}
      type={type}
      {...(props as any)}
    >
      {icon && (
        <IconWrapper
          className={classOverrides && classOverrides.icon}
          data-testid={`${tidPrefix}-${tid.icon}`}
          icon={icon}
          iconRight={iconRight}
          iconOnly={iconOnly}
        >
          {icon}
        </IconWrapper>
      )}
      <ContentWrapper
        className={classOverrides && classOverrides.contentWrapper}
        data-testid={`${tidPrefix}-${tid.content}`}
      >
        {children}
      </ContentWrapper>
    </ButtonWrapper>
  );
};

export default Button;
