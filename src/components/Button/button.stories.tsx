import React from 'react';
import Button, { ButtonSize } from '.';

export default {
  component: Button,
  title: 'Button'
};

const iconMock = (
  <span role="img" aria-label="fist emoji">
    ✊🏾
  </span>
);

export const primary = () => (
  <Button primary size={ButtonSize.Medium}>
    Click Me!
  </Button>
);

export const warning = () => (
  <Button warning size={ButtonSize.Medium}>
    Click Me!
  </Button>
);

export const success = () => (
  <Button success size={ButtonSize.Medium}>
    Click Me!
  </Button>
);

export const LHSIcon = () => <Button icon={iconMock}>Click Me!</Button>;

export const RHSIcon = () => (
  <Button icon={iconMock} iconRight>
    Click Me!
  </Button>
);

export const onlyIcon = () => <Button icon={iconMock}></Button>;

export const noBorder = () => (
  <Button primary noBorder>
    Click Me!
  </Button>
);

export const fullWidth = () => (
  <Button primary fullWidth>
    Click Me!
  </Button>
);

export const disabled = () => (
  <Button primary disabled>
    Click Me!
  </Button>
);
