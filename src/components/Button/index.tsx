import React, { FC, HTMLAttributes } from 'react';
import { ButtonWrapper, ContentWrapper, IconWrapper } from './style';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

enum ElementIdentifiers {
  button = 'button',
  icon = 'icon',
  content = 'content'
}

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  success?: boolean;
  transparent?: boolean;
  clear?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
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
  size = ButtonSize.Medium,
  icon,
  iconRight,
  classOverrides,
  ...props
}) => {
  const tidPrefix = id || componentName;
  const tid = {
    button: (testIds && testIds.button) || ElementIdentifiers.button,
    icon: (testIds && testIds.icon) || ElementIdentifiers.icon,
    content: (testIds && testIds.content) || ElementIdentifiers.content
  };
  const iconOnly = !!(!children && icon);

  return (
    <ButtonWrapper
      className={classOverrides && classOverrides.buttonWrapper}
      data-test-id={`${tidPrefix}-${tid.button}`}
      size={size}
      icon={icon}
      iconRight={iconRight}
      iconOnly={iconOnly}
      {...props}
    >
      {icon && (
        <IconWrapper
          className={classOverrides && classOverrides.icon}
          data-test-id={`${tidPrefix}-${tid.icon}`}
          icon={icon}
          iconRight={iconRight}
          iconOnly={iconOnly}
        >
          {icon}
        </IconWrapper>
      )}
      <ContentWrapper
        className={classOverrides && classOverrides.contentWrapper}
        data-test-id={`${tidPrefix}-${tid.content}`}
      >
        {children}
      </ContentWrapper>
    </ButtonWrapper>
  );
};

export default Button;
