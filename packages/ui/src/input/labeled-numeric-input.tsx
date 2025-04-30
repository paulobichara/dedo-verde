import React from 'react';
import { LabeledTextInput } from './labeled-text-input';
import { Platform } from 'react-native';

type Props = {
  label: string;
  value?: number;
  placeholder: string;
  setValue: (newValue?: number) => void;
};

export const LabeledNumericInput = ({ label, value, setValue, placeholder }: Props) => {
  return (
    <LabeledTextInput
      keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
      label={label}
      placeholder={placeholder}
      setValue={(newValue) => {
        const sanitized = newValue.replace(/[^0-9]/g, '');
        const parsed = sanitized.length > 0 ? Number.parseInt(sanitized, 10) : undefined;
        setValue(parsed);
      }}
      value={value !== undefined ? `${value}` : undefined}
    />
  );
};
