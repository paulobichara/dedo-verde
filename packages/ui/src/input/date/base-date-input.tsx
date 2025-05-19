import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

type Props = {
  error?: string;
  isPickerVisible: boolean;
  label: string;
  picker?: ReactNode;
  placeholder?: string;
  readonly?: boolean;
  renderPicker?: () => void;
  setIsPickerVisible?: (isVisible: boolean) => void;
  setValue: (newValue?: Date) => void;
  value?: Date;
};

export const BaseDateInput = ({
  error,
  isPickerVisible,
  label,
  picker,
  placeholder,
  renderPicker,
  setIsPickerVisible,
  value,
}: Props) => {
  const renderVisiblePicker = () => {
    setIsPickerVisible?.(true);
    renderPicker?.();
  };

  return (
    <View>
      <TextInput
        label={label}
        onFocus={renderVisiblePicker}
        placeholder={placeholder}
        right={<TextInput.Icon icon="calendar" />}
        showSoftInputOnFocus={false}
        value={value?.toLocaleDateString()}
      />
      {isPickerVisible && picker}
      {error && <HelperText type="error">{error}</HelperText>}
    </View>
  );
};
