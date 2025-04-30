import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from '../../button';
import { Colors } from '../../theme/colors';
import DatePicker from 'react-native-date-picker';

type Props = {
  value?: Date;
  setValue: (newValue?: Date) => void;
  placeholder?: string;
};

export const DateInput = ({ placeholder, value, setValue }: Props) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const onDateChange = (date?: Date) => {
    setValue(date);
    setIsPickerVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.gray0}
        readOnly={true}
        style={styles.input}
        value={value?.toLocaleDateString()}
      />
      <Button onClick={() => setIsPickerVisible(true)} text="Calendar" />
      {isPickerVisible && <DatePicker date={value ?? new Date()} modal onConfirm={onDateChange} />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.gray0,
  },
});
