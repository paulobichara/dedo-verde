import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { BaseDateInput } from './base-date-input';

type Props = {
  error?: string;
  label: string;
  placeholder?: string;
  setValue: (newValue?: Date) => void;
  value?: Date;
};

export const DateInput = (props: Props) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const { setValue, value } = props;

  const onDateChange = (_: DateTimePickerEvent, date?: Date) => {
    setIsPickerVisible(false);
    setValue(date);
  };

  return (
    <BaseDateInput
      {...props}
      isPickerVisible={isPickerVisible}
      picker={
        <DateTimePicker
          mode="date"
          onChange={onDateChange}
          onTouchCancel={() => setIsPickerVisible(false)}
          value={value ?? new Date()}
        />
      }
      setIsPickerVisible={setIsPickerVisible}
    />
  );
};
