import { createElement } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  value?: Date;
  setValue: (newValue?: Date) => void;
  error?: string;
};

export const DateInput = ({ error, value, setValue }: Props) =>
  createElement('input', {
    type: 'date',
    value,
    onChange: setValue,
    style: error ? styles.inputInvalid : styles.inputValid
  });

const styles = StyleSheet.create({
    inputValid: {
      fontSize: 14,
      color: 'green',
      padding: 4,
      borderWidth: 1,
      borderColor: 'lightgray',
      borderBottomColor: 'lightgray',
      borderTopColor: 'lightgray',
      borderRightColor: 'lightgray',
      borderLeftColor: 'lightgray',
    },
    inputInvalid: {
      fontSize: 14,
      padding: 4,
      borderWidth: 1,
      borderColor: 'red',
      borderBottomColor: 'red',
      borderTopColor: 'red',
      borderRightColor: 'red',
      borderLeftColor: 'red',
    },
})
