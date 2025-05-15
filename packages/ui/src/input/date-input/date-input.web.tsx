import { createElement } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

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
      borderColor: Colors.gray0,
      borderBottomColor: Colors.gray0,
      borderTopColor: Colors.gray0,
      borderRightColor: Colors.gray0,
      borderLeftColor: Colors.gray0,
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
