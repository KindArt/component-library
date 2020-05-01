import styled, { css } from 'styled-components';
import { Colours } from '../../constants/styles';

export const LabelWrapper = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.label.colour};
  line-height: 1.125rem;
  text-transform: uppercase;
  & + * {
    margin-top: 0.5rem;
  }

  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

LabelWrapper.defaultProps = {
  theme: {
    label: {
      colour: `${Colours.TEXT_SECONDARY}`,
    },
  },
};
