import React, { FC, useState, useEffect } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker as CustomDatePicker } from 'react-nice-dates';
import { Input } from '../';
import 'react-nice-dates/build/style.css';

export interface IDatePickerProps {
  date?: Date;
  disabled?: boolean;
  label?: string;
  dateFormat?: string;
  locale?: string;
}

const DatePicker: FC<IDatePickerProps> = ({ date, disabled, label, dateFormat = 'DD/MM/YYYY', locale }) => {
  const [selectedDate, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const newDate = date || null;
    setDate(newDate);
  }, [date]);

  const formattedDate = selectedDate || undefined;
  return (
    <CustomDatePicker date={formattedDate} onDateChange={setDate} locale={enGB}>
      {({ inputProps, focused }: any) => <Input label={label} disabled={disabled} {...inputProps} />}
    </CustomDatePicker>
  );
};

export default DatePicker;
