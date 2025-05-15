import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LabeledDateInput } from './input/labeled-date-input';
import { LabeledNumericInput } from './input/labeled-numeric-input';
import { LabeledTextInput } from './input/labeled-text-input';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconButton } from './input/icon-button';

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
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons color="green" name="leaf" size={32} />
          <Text style={styles.headerText}>New Plant Form</Text>
        </View>
        <LabeledTextInput
          error={nicknameError}
          label="Nickname"
          placeholder="Strawberries #1"
          setValue={setNickname}
          value={nickname}
        />
        <LabeledTextInput
          label="Description"
          multiline={true}
          numberOfLines={3}
          placeholder="Strawberries planted in soil, vase #1 in the backyard. Using mineral nutrients."
          setValue={setDescription}
          value={description}
        />
        <LabeledDateInput
          error={lastWaterDateError}
          label="Last watering date"
          setValue={setLastWaterDate}
          value={lastWaterDate}
        />
        <LabeledNumericInput
          error={waterFrequencyError}
          label="Watering frequency (days)"
          placeholder="Not specified"
          setValue={setWaterFrequency}
          value={waterFrequency}
        />
      <View style={styles.buttonsContainer}>
        <IconButton iconName="close-circle-outline" label="Cancel" onPress={onCancel} />
        <IconButton iconName="save" label="Save" onPress={() => {
          if (validateInput()){
            onSave();
          }
        }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 24,
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
  },
  headerText: {
    color: 'green',
    fontSize: 24,
  },
});
