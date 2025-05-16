import React from 'react';
import { KeyboardTypeOptions, StyleSheet, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

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

export const CustomTextInput = ({
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
      <TextInput
        keyboardType={keyboardType}
        label={label}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
        error={!!error}
      />
      {error && (<HelperText type="error">
        {error}
      </HelperText>)}
    </View>
  );
};
