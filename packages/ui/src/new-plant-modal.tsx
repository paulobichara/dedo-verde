import React, { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Portal, useTheme } from 'react-native-paper';
import { NewPlantForm } from './new-plant-form';

export const NewPlantModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme();

  return (
    <SafeAreaView style={styles.centeredView}>
      <Portal>
        <Modal style={{ backgroundColor: theme.colors.background }} visible={modalVisible} onDismiss={() => setModalVisible(false)}>
          <NewPlantForm
            onCancel={() => setModalVisible(false)}
            onSave={() => setModalVisible(false)}
          />
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={() => setModalVisible(true)}>
        Show
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
