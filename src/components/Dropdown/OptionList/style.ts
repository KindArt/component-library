import styled, { css } from 'styled-components';
import { Colours, Typography } from '../../../constants/styles';

export const Wrapper = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid ${Colours.BORDER_COLOUR_DARKER};
  background: white;
  border-radius: 4px;
  transform: translateY(6px);
  max-height: 300px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 235px;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

// needs the :focus
export const ButtonWrapperOverride = css`
  outline: none;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 0;
`;

export const ContentWrapperOverride = css`
  flex-grow: 0;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    min-width: 1px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Label = styled.div`
  font-size: ${Typography.DEFAULT_FONT_SIZE};
  pointer-events: none;
`;

export const Check = styled.div`
  color: ${Colours.GREEN};
  margin-left: 12px;
  flex-shrink: 0;
  position: relative;
  width: 5px;
  height: 5px;
  background: ${Colours.GREEN};
  border-radius: 50%;
`;
