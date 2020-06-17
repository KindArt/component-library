import React, { FC, useState, useEffect, HTMLProps } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker as CustomDatePicker } from 'react-nice-dates';
import { Input } from '../';
import 'react-nice-dates/build/style.css';

export interface IDatePickerProps extends HTMLProps<HTMLInputElement> {
  date?: Date;
  disabled?: boolean;
  label?: string;
  dateFormat?: string;
  errorMessage?: string;
  callbackOnChange?: Function;
}

const DatePicker: FC<IDatePickerProps> = ({
  date,
  disabled,
  label,
  dateFormat = 'dd/MM/yyyy',
  errorMessage,
  callbackOnChange,
  value,
}) => {
  const [selectedDate, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const newDate = (value as any) || date || null;
    setDate(newDate);
  }, [date]);

  const handleOnDateChange = (date: Date | null) => {
    setDate(date);
    callbackOnChange && callbackOnChange(date);
  };

  const formattedDate = selectedDate || undefined;
  return (
    <CustomDatePicker date={formattedDate} onDateChange={handleOnDateChange} locale={enGB} format={dateFormat}>
      {({ inputProps, focused }: any) => (
        <Input
          classOverrides={{ input: 'input' + (focused ? ' -focused' : '') }}
          label={label}
          // placeholder={dateFormat}
          disabled={disabled}
          errorMessage={errorMessage}
          {...inputProps}
        />
      )}
    </CustomDatePicker>
  );
};

export default DatePicker;
