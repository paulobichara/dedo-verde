import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

type Props = {
  value?: Date;
  setValue: (newValue?: Date) => void;
  error?: string;
};

export const DateInput = ({ error, value, setValue }: Props) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const onDateChange = (event: DateTimePickerEvent, date?: Date) => {
    setValue(date);
    setIsPickerVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onFocus={() => setIsPickerVisible(true)}
        placeholder="Not specified"
        placeholderTextColor='lightgray'
        style={[styles.input, error ? styles.inputInvalid : styles.inputValid]}
        value={value?.toLocaleDateString()}
      />
      <Pressable onPress={() => setIsPickerVisible(true)}>
        <Ionicons color="green" name="calendar" size={24} />
      </Pressable>
      {isPickerVisible && (
        <DateTimePicker mode="date" onChange={onDateChange} value={value ?? new Date()} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    padding: 4,
    borderWidth: 1,
  },
  inputValid: {
    borderColor: 'lightgray',
  },
  inputInvalid: {
    borderColor: 'red',
  },
});
