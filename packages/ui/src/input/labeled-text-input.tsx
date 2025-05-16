import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  label: string;
  multiline?: boolean;
  numberOfLines?: number;
  placeholder: string;
  setValue: (newValue: string) => void;
  value?: string;
};

export const LabeledTextInput = ({
  error,
  keyboardType,
  label,
  multiline,
  numberOfLines,
  placeholder,
  setValue,
  value,
}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={(newValue: string) => setValue(newValue)}
        placeholder={placeholder}
        placeholderTextColor='lightgray'
        style={[styles.input, error ? styles.inputInvalid : styles.inputValid]}
        value={value}
      />
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
  input: {
    color: 'green',
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
  error: {
    fontSize: 12,
    color: 'red',
  },
});
