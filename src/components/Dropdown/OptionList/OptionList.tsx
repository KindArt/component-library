import React, { FC } from 'react';
import { Button } from '../../';
import { DropdownOptionType, OptionValueType } from '../';
import {
  Label,
  Check,
  Wrapper,
  ButtonWrapperOverride,
  ContentWrapperOverride,
  OptionWrapper,
  List,
  Option,
} from './style';

interface IOptionListProps {
  selected: Array<OptionValueType>;
  options: Array<DropdownOptionType>;
  excluded?: Array<OptionValueType>;
  optionClick: (value: OptionValueType) => void;
}

const OptionList: FC<IOptionListProps> = ({ options, excluded, selected, optionClick }) => {
  const renderOptions = () => {
    const filteredOptions = options.filter((option) => {
      if (excluded && excluded.indexOf(option.value) > -1) {
        return false;
      }
      return true;
    });

    return filteredOptions.map((i) => {
      const indexIsSelected = selected.find((k) => i.value === k);

      return (
        <Option key={i.value} onClick={() => optionClick(i.value)}>
          <Button
            fullWidth
            classOverrides={{
              buttonWrapper: `${ButtonWrapperOverride}`,
              contentWrapper: `${ContentWrapperOverride}`,
            }}
          >
            <OptionWrapper>
              <Label>{i.label}</Label>
              {indexIsSelected ? <Check /> : null}
            </OptionWrapper>
          </Button>
        </Option>
      );
    });
  };

  return (
    <Wrapper>
      <List>{renderOptions()}</List>
    </Wrapper>
  );
};

export default OptionList;
