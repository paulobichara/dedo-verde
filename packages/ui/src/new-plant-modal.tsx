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
        <Modal
          onDismiss={() => setModalVisible(false)}
          style={{ backgroundColor: theme.colors.background }}
          visible={modalVisible}>
          <NewPlantForm
            onCancel={() => setModalVisible(false)}
            onSave={() => setModalVisible(false)}
          />
        </Modal>
      </Portal>
      <Button onPress={() => setModalVisible(true)} style={{ marginTop: 30 }}>
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
