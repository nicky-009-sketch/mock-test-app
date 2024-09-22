import React from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ModalConfirm: React.FC<any> = ({ visible, onClose, onConfirm,title, message, confirmActionText, closeActionText }) => {
 return (
  <Modal transparent={true} visible={visible} animationType="fade">
   <View style={styles.overlay}>
    <View style={styles.alertBox}>
     <Text style={styles.alertTitle}>{title}</Text>
     <Text style={styles.alertMessage}>{message}</Text>
     <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onClose}>
       <Text style={styles.buttonText}>{closeActionText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onConfirm}>
       <Text style={styles.buttonText}>{confirmActionText}</Text>
      </TouchableOpacity>
     </View>
    </View>
   </View>
  </Modal>
 );
};

const styles = StyleSheet.create({
 overlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 },
 alertBox: {
  width: '80%',
  padding: 20,
  backgroundColor: 'white',
  borderRadius: 10,
  alignItems: 'center',
 },
 alertTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
 },
 alertMessage: {
  fontSize: 14,
  marginBottom: 20,
  textAlign: 'center',
  color:'gray'
 },
 buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
 },
 button: {
  flex: 1,
  padding: 5,
  backgroundColor: '#007BFF',
  borderRadius: 5,
  marginHorizontal: 20,
  alignItems: 'center',
 },
 buttonText: {
  color: 'white',
  fontWeight: 'bold',
 },
});

export default ModalConfirm;