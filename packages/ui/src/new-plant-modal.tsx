import React, { useState } from 'react';
import { Alert, Modal, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import { NewPlantForm } from './new-plant-form';

export const NewPlantModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        visible={modalVisible}>
        <NewPlantForm
          onCancel={() => setModalVisible(false)}
          onSave={() => setModalVisible(false)}
        />
      </Modal>
      <Pressable onPress={() => setModalVisible(true)} style={[styles.button, styles.buttonOpen]}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
