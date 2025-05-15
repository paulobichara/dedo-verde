import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DateInput } from './date-input';

type Props = {
  label: string;
  value?: Date;
  setValue: (newValue?: Date) => void;
  error?: string;
};

export const LabeledDateInput = ({ error, label, value, setValue }: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <DateInput error={error} setValue={setValue} value={value} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
