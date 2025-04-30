import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { LabeledDateInput } from './input/labeled-date-input';
import { LabeledDateInput } from './input/labeled-date-input';
import { LabeledNumericInput } from './input/labeled-numeric-input';
import { LabeledTextInput } from './input/labeled-text-input';

export const NewPlantForm = () => {
  const [nickname, setNickname] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [germinationDate, setGerminationDate] = useState<Date>();
  const [lastWaterDate, setLastWaterDate] = useState<Date>();
  const [waterFrequency, setWaterFrequency] = useState<number>();
  const [lastFertilizerDate, setLastFertilizerDate] = useState<Date>();
  const [fertilizerFrequency, setFertilizerFrequency] = useState<number>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>New Plant Form</Text>
      </View>
      <LabeledTextInput
        label="Nickname"
        placeholder="Strawberry #1"
        setValue={setNickname}
        value={nickname}
      />
      <LabeledTextInput
        label="Description"
        multiline={true}
        numberOfLines={3}
        placeholder="Strawberries planted in soil vase 1 in the backyard. Using mineral nutrients."
        setValue={setDescription}
        value={description}
      />
      <LabeledDateInput
        label="Germination date"
        placeholder="Not specified"
        setValue={setGerminationDate}
        value={germinationDate}
      />
      <LabeledDateInput
        label="Last watering date"
        placeholder="Not specified"
        setValue={setLastWaterDate}
        value={lastWaterDate}
      />
      <LabeledNumericInput
        label="Watering frequency (days)"
        placeholder="Not specified"
        setValue={setWaterFrequency}
        value={waterFrequency}
      />
      <LabeledDateInput
        label="Last fertilization date"
        placeholder="Not specified"
        setValue={setLastFertilizerDate}
        value={lastFertilizerDate}
      />
      <LabeledNumericInput
        label="Fertilization frequency (days)"
        placeholder="Not specified"
        setValue={setFertilizerFrequency}
        value={fertilizerFrequency}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  headerText: {
    fontSize: 24,
  },
});
