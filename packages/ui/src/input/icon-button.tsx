import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  iconName: keyof typeof Ionicons.glyphMap;
  label?: string;
  onPress?: () => Promise<void> | void;
}

export const IconButton = ({ iconName, label, onPress }: Props) => {
  return (
    <Ionicons.Button name={iconName} onPress={onPress} style={styles.button}>
      {label && <Text style={styles.buttonText}>{label}</Text>}
    </Ionicons.Button>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 24,
    backgroundColor: 'green',
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
