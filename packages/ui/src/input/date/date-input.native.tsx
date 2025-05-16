import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

type Props = {
  error?: string;
  label: string;
  placeholder?: string;
  setValue: (newValue?: Date) => void;
  value?: Date;
};

export const DateInput = ({ error, label, placeholder, setValue, value }: Props) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const onDateChange = (event: DateTimePickerEvent, date?: Date) => {
    setValue(date);
    setIsPickerVisible(false);
  };

  return (
    <View>
      <TextInput
        label={label}
        onPress={() => setIsPickerVisible(true)}
        readOnly
        right={<TextInput.Icon icon="calendar" onPress={() => setIsPickerVisible(true)} />}
        value={value?.toLocaleDateString()}
      />
      {isPickerVisible && (
        <DateTimePicker mode="date" onChange={onDateChange} value={value ?? new Date()} />
      )}
      {error && <HelperText type="error">{error}</HelperText>}
    </View>
  );
};
