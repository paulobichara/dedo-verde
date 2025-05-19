import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomTextInput } from './input/custom-text-input';
import { DateInput } from './input/date';
import { NumericInput } from './input/numeric-input';

interface Props {
  onCancel: () => void;
  onSave: () => Promise<void> | void;
}

export const NewPlantForm = ({ onCancel, onSave }: Props) => {
  const [nickname, setNickname] = useState<string>();
  const [nicknameError, setNicknameError] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [lastWaterDate, setLastWaterDate] = useState<Date>();
  const [lastWaterDateError, setLastWaterDateError] = useState<string>();
  const [waterFrequency, setWaterFrequency] = useState<number>();
  const [waterFrequencyError, setWaterFrequencyError] = useState<string>();

  const theme = useTheme();

  const validateInput = () => {
    let valid = true;

    if (!nickname) {
      valid = false;
      setNicknameError('A nickname must be provided');
    } else {
      setNicknameError(undefined);
    }

    if (!lastWaterDate || lastWaterDate > new Date()) {
      valid = false;
      setLastWaterDateError('Last watering date must be in the past');
    } else {
      setLastWaterDateError(undefined);
    }

    if (waterFrequency === undefined || waterFrequency <= 0) {
      valid = false;
      setWaterFrequencyError('Watering frequency must be a positive number');
    } else {
      setWaterFrequencyError(undefined);
    }

    return valid;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <MaterialIcon color={theme.colors.primary} name="sprout" size={32} />
        <Text variant="titleLarge">New Plant Form</Text>
      </View>
      <CustomTextInput
        error={nicknameError}
        label="Nickname"
        placeholder="Strawberries #1"
        setValue={setNickname}
        value={nickname}
      />
      <CustomTextInput
        label="Description"
        multiline={true}
        numberOfLines={3}
        placeholder="Strawberries planted in soil, vase #1 in the backyard. Using mineral nutrients."
        setValue={setDescription}
        value={description}
      />
      <DateInput
        error={lastWaterDateError}
        label="Last watering date"
        setValue={setLastWaterDate}
        value={lastWaterDate}
      />
      <NumericInput
        error={waterFrequencyError}
        label="Watering frequency (days)"
        placeholder="Not specified"
        setValue={setWaterFrequency}
        value={waterFrequency}
      />
      <View style={styles.buttonsContainer}>
        <Button icon="close" mode="outlined" onPress={onCancel}>
          Cancel
        </Button>
        <Button
          icon="content-save"
          mode="contained"
          onPress={() => {
            if (validateInput()) {
              onSave();
            }
          }}>
          Save
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    padding: 16,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 24,
    paddingBottom: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
  },
});
