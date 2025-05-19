import React, { ReactNode, useState } from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

type Props = {
  error?: string;
  label: string;
  picker?: ReactNode;
  placeholder?: string;
  readonly?: boolean;
  renderPicker?: () => void;
  setValue: (newValue?: Date) => void;
  value?: Date;
};

export const BaseDateInput = ({
  error,
  label,
  picker,
  placeholder,
  readonly,
  renderPicker,
  value,
}: Props) => {

  return (
    <View>
      <TextInput
        label={label}
        onFocus={renderPicker}
        placeholder={placeholder}
        readOnly={readonly}
        right={<TextInput.Icon icon="calendar" onPress={renderPicker} />}
        value={value?.toLocaleDateString()}
      />
      {picker}
      {error && <HelperText type="error">{error}</HelperText>}
    </View>
  );
};
