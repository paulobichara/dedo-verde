import moment from 'moment-timezone';
import React, { ChangeEvent, useRef } from 'react';
import { BaseDateInput } from './base-date-input';

moment.tz.setDefault();

type Props = {
  error?: string;
  label: string;
  placeholder?: string;
  setValue: (newValue?: Date) => void;
  value?: Date;
};

export const DateInput = (props: Props) => {
  const dateInputRef = useRef<HTMLInputElement>(null);

  const { setValue } = props;

  const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(moment(event.target.value).toDate());
  };

  const renderPicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <BaseDateInput
      {...props}
      isPickerVisible={true}
      picker={
        <input
          onChange={onDateChange}
          ref={dateInputRef}
          style={{ visibility: 'hidden' }}
          type="date"
        />
      }
      renderPicker={renderPicker}
    />
  );
};
