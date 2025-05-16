import React from 'react';
import { Platform } from 'react-native';
import { CustomTextInput } from './custom-text-input';


type Props = {
  label: string;
  value?: number;
  placeholder: string;
  setValue: (newValue?: number) => void;
  error?: string;
};

export const NumericInput = ({ error, label, value, setValue, placeholder }: Props) => {
  return (
    <CustomTextInput
      error={error}
      keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
      label={label}
      
      placeholder={placeholder}
      setValue={(newValue) => {
        const sanitized = newValue.replace(/[^0-9]/g, '');
        const parsed = sanitized.length > 0 ? Number.parseInt(sanitized, 10) : undefined;
        setValue(parsed);
        return sanitized;
      }}
      value={value !== undefined ? `${value}` : undefined}
    />
  );
};
