import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DateInput } from './date-input';

type Props = {
  label: string;
  value?: Date;
  placeholder: string;
  setValue: (newValue?: Date) => void;
};

export const LabeledDateInput = ({ label, value, setValue, placeholder }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <DateInput setValue={setValue} value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
