import React, { FC, HTMLAttributes, ReactNode, useState } from 'react';
import { Button, Label } from '../';
import OptionList from './OptionList/OptionList';
import OutsideClickHandler from '../../hocs/OutsideClickHandler';

import {
  ValueRendered,
  ValueRenderedWrapper,
  ArrowWrapper,
  ValueWrapper,
  PlaceholderAndOther,
  PlusValue,
  ErrorMessage,
} from './style';

export type DropdownOptionValueType = string | number;

export type DropdownOptionType = {
  label: ReactNode;
  value: DropdownOptionValueType;
};

export interface IDropdownProps extends HTMLAttributes<HTMLSelectElement> {
  options: Array<DropdownOptionType>;
  defaultOption?: Array<DropdownOptionValueType> | DropdownOptionValueType;
  value?: Array<DropdownOptionType>;
  excluded?: Array<DropdownOptionValueType>;
  multipleSelection?: boolean;
  optionProps?: object;
  label?: string;
  disabled?: boolean;
  errorMessage?: string;
  callbackOnChange?: Function;
}

const Dropdown: FC<IDropdownProps> = ({
  defaultOption,
  options,
  label,
  disabled,
  placeholder,
  excluded,
  multipleSelection,
  optionProps,
  value,
  errorMessage,
  callbackOnChange,
}) => {
  const defaultValue = Array.isArray(defaultOption) ? defaultOption : [defaultOption];

  const selectedOptions: Array<DropdownOptionType> = [];
  options.forEach((item) => {
    if (defaultValue.indexOf(item.value) !== -1) {
      selectedOptions.push(item);
    }
  });

  const [selected, setSelected] = useState(selectedOptions);
  const [focused, setFocused] = useState(false);

  const onToggleFocus = () => setFocused(!focused);

  const renderValue = () => {
    const firstRender = selected[0];
    if (typeof firstRender !== 'undefined') {
      if (!firstRender.label) {
        const full = options.find((item) => firstRender.value === item.value);
        if (full) {
          firstRender.label = full.label;
        }
      }
    }

    if (options.length < 1) {
      return <ValueWrapper>No options available</ValueWrapper>;
    }

    if (disabled || selected.length < 1) {
      return <ValueWrapper placeholderEmpty={true}>{placeholder}</ValueWrapper>;
    }

    if (selected.length === 1) {
      return <ValueWrapper>{firstRender.label}</ValueWrapper>;
    }

    return (
      <PlaceholderAndOther>
        <div>{firstRender.label}</div>
        <PlusValue>+{selected.length - 1}</PlusValue>
      </PlaceholderAndOther>
    );
  };

  const showOptionList = focused && !disabled;

  // const handleOnClickAll = (clearOnly = false) => {
  //   if (selected >= options || clearOnly) {
  //     // this.callCallbackIfAvailable = true;
  //     setSelected([]);
  //   } else {
  //     const selected = options.map(o => o);
  //     // this.onChange()
  //     setSelected(selected);
  //   }
  // };

  const setSelectedStateAndCallback = (selected: Array<DropdownOptionType>) => {
    setSelected(selected);
    callbackOnChange && callbackOnChange(selected);
  };

  const handleOptionClick = (option: DropdownOptionType) => {
    if (!multipleSelection) {
      setSelectedStateAndCallback([option]);
      setFocused(false);
    } else {
      const selectedClone = [...selected];
      const index = selectedClone.map((item) => item.value).indexOf(option.value);
      if (index !== -1) {
        selectedClone.splice(index, 1);
      } else {
        selectedClone.push(option);
      }
      setSelectedStateAndCallback(selectedClone);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={focused ? () => setFocused(false) : null} onOutsideScroll={false}>
      {label && <Label content={label} />}
      <Button
        classOverrides={{
          buttonWrapper: `${ValueRendered}`,
        }}
        disabled={disabled || options.length < 1}
        onClick={onToggleFocus}
      >
        <ValueRenderedWrapper>
          {renderValue()}
          <ArrowWrapper />
        </ValueRenderedWrapper>
      </Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {showOptionList && (
        <OptionList
          excluded={excluded}
          optionClick={handleOptionClick}
          optionProps={optionProps}
          options={options}
          selected={value || selected}
        />
      )}
    </OutsideClickHandler>
  );
};

export default Dropdown;
