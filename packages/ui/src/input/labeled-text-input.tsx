import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../theme/colors';

type Props = {
  label: string;
  value?: string;
  placeholder: string;
  setValue: (newValue: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
};

export const LabeledTextInput = ({
  label,
  value,
  setValue,
  placeholder,
  multiline,
  numberOfLines,
  keyboardType,
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
        placeholderTextColor={Colors.gray0}
        style={styles.input}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 14,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.gray0,
  },
});
