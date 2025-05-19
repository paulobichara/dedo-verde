import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React from 'react';
import { BaseDateInput } from './base-date-input';

type Props = {
  error?: string;
  label: string;
  placeholder?: string;
  setValue: (newValue?: Date) => void;
  value?: Date;
};

export const DateInput = (props: Props) => {
  const { setValue, value } = props;

  const onDateChange = (_: DateTimePickerEvent, date?: Date) => {
    setValue(date);
  };

  return (
    <BaseDateInput
      {...props}
      picker={<DateTimePicker mode="date" onChange={onDateChange} value={value ?? new Date()} />}
    />
  );
};
