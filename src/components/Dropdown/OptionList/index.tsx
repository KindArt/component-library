import React, { FC } from 'react';
import { Button } from '../../';
import { DropdownOptionType, DropdownOptionValueType } from '../';
import { Label, Check, Wrapper, ButtonWrapperOverride, ContentWrapperOverride, OptionWrapper, List } from './style';

interface IOptionListProps {
  selected: Array<DropdownOptionType>;
  options: Array<DropdownOptionType>;
  excluded?: Array<DropdownOptionValueType>;
  optionClick: Function;
  optionProps?: object;
}

const OptionList: FC<IOptionListProps> = ({ options, excluded, selected, optionClick }) => {
  const renderOptions = () => {
    const filteredOptions = options.filter(option => {
      if (excluded && excluded.indexOf(option.value) > -1) {
        return false;
      }
      return true;
    });

    return filteredOptions.map(i => {
      const indexIsSelected = selected.find(k => i.value === k.value);
      const onClick = (key: DropdownOptionType) => () => {
        optionClick(key);
      };
      return (
        <Button
          key={i.value}
          classOverrides={{
            buttonWrapper: `${ButtonWrapperOverride}`,
            contentWrapper: `${ContentWrapperOverride}`
          }}
          onClick={onClick(i)}
        >
          <OptionWrapper>
            <Label>{i.label}</Label>

            {indexIsSelected ? <Check /> : null}
          </OptionWrapper>
        </Button>
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
