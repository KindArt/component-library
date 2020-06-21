import styled, { css } from 'styled-components';
import { Colours, CssVariables } from '../../constants/styles';

// Dropdown Styles

export const Wrapper = styled.div`
  ${({ className }) =>
    className &&
    css`
      ${className}
    `}
`;

export const ValueRendered = css`
  width: 100%;
  text-align: left; // important for other selectors - :hover etc.
  position: relative;
  background: #ffffff;
  border: ${CssVariables.BORDER_DEFAULT};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
`;

export const ValueRenderedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & > * {
    flex-grow: 1;
    max-width: 100%;
    min-width: 1px;
  }
`;

export const ArrowWrapper = styled.div`
  flex-grow: 0;
  transition: 0.2s color;
  position: relative;
  width: 1px;
  height: 100%;
  margin-left: 12px;
  &:before,
  &:after {
    display: block;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 3px solid ${Colours.TEXT_SECONDARY};
  }
  &:after {
    top: -4px;
  }
  &:before {
    top: 2px;
    transform: rotate(180deg);
  }
`;

const PlaceholderEmpty = css`
  color: ${Colours.TEXT_SECONDARY};
`;

interface IValueWrapper {
  placeholderEmpty?: boolean;
}

export const ValueWrapper = styled.div<IValueWrapper>`
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ placeholderEmpty }) => placeholderEmpty && PlaceholderEmpty}
`;

export const PlaceholderAndOther = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > *:first-child {
    min-width: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PlusValue = styled.div`
  display: inline-block;
  background: ${Colours.BORDER_COLOUR_DARKER};
  border: ${CssVariables.BORDER_DEFAULT};
  height: 20px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  min-width: 30px;
  margin-left: 10px;
  font-size: 0.7rem;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.errorMessage.color};
  margin-top: 6px;
  line-height: 1.375rem;
`;

ErrorMessage.defaultProps = {
  theme: {
    errorMessage: {
      color: `${Colours.ERROR}`,
    },
  },
};
