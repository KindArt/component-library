import React, { FC, HTMLProps, ReactNode, useState, useEffect } from 'react';
import { Button, Label } from '../';
import OptionList from './OptionList/OptionList';
import OutsideClickHandler from '../../hocs/OutsideClickHandler';

import {
  Wrapper,
  ValueRendered,
  ValueRenderedWrapper,
  ArrowWrapper,
  ValueWrapper,
  PlaceholderAndOther,
  PlusValue,
  ErrorMessage,
} from './style';

export type OptionValueType = string | number;

export type DropdownOptionType = {
  label: ReactNode;
  value: OptionValueType;
};

export interface IDropdownProps extends HTMLProps<HTMLSelectElement> {
  options: Array<DropdownOptionType>;
  excluded?: Array<OptionValueType>;
  multipleSelection?: boolean;
  label?: string;
  disabled?: boolean;
  errorMessage?: string;
  callbackOnChange?: Function;
  classOverrides?: {
    wrapper?: string;
  };
}

const Dropdown: FC<IDropdownProps> = ({
  options,
  excluded,
  multipleSelection,
  label,
  disabled,
  errorMessage,
  callbackOnChange,
  classOverrides,
  placeholder,
  value,
  id,
}) => {
  const [selected, setSelected] = useState<Array<OptionValueType>>([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (value) {
      const defaultOptions = Array.isArray(value) ? value : [value];
      const selectedOptions: Array<OptionValueType> = [];
      options.forEach((item) => {
        if (defaultOptions.indexOf(item.value) !== -1) {
          selectedOptions.push(item.value);
        }
      });
      setSelected(selectedOptions);
    }
  }, [value]);

  const onToggleFocus = () => setFocused(!focused);

  const renderValue = () => {
    const firstSelectedOption = options.filter((option) => option.value === selected[0]);

    if (options.length < 1) {
      return <ValueWrapper>No options available</ValueWrapper>;
    }

    if (disabled || selected.length < 1) {
      return <ValueWrapper placeholderEmpty={true}>{placeholder}</ValueWrapper>;
    }

    if (selected.length === 1) {
      return <ValueWrapper>{firstSelectedOption[0].label}</ValueWrapper>;
    }

    if (selected.length > 1) {
      return (
        <PlaceholderAndOther>
          <div>{firstSelectedOption[0].label}</div>
          <PlusValue>+{selected.length - 1}</PlusValue>
        </PlaceholderAndOther>
      );
    }
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

  const setSelectedStateAndCallback = (selected: Array<OptionValueType>) => {
    setSelected(selected);
    callbackOnChange && callbackOnChange(selected);
  };

  const handleOptionClick = (option: OptionValueType) => {
    if (!multipleSelection) {
      setSelectedStateAndCallback([option]);
      setFocused(false);
    } else {
      const selectedClone = [...selected];
      const index = selectedClone.map((item) => item).indexOf(option);
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
      <Wrapper className={classOverrides && classOverrides.wrapper}>
        {label && <Label content={label} htmlFor={id} />}
        <Button
          id={id}
          classOverrides={{
            buttonWrapper: `${ValueRendered}`,
          }}
          disabled={disabled || options.length < 1}
          onClick={onToggleFocus}
          error={!!errorMessage}
        >
          <ValueRenderedWrapper>
            {renderValue()}
            <ArrowWrapper />
          </ValueRenderedWrapper>
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {showOptionList && (
          <OptionList excluded={excluded} optionClick={handleOptionClick} options={options} selected={selected} />
        )}
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default Dropdown;
