import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loaders = () => {
 const SpinLoader: React.FC<{ visible?: boolean }> = ({ visible }) => {
  return (
   <Modal
    transparent={visible}
    animationType="none"
    visible={visible}
   >
    <View style={styles.loaderContainer}>
     <ActivityIndicator
      size="large"
      color="blue"
     />
    </View>
   </Modal>
  )
 }
 return { SpinLoader }
}

const styles = StyleSheet.create({
 loaderContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 },
});

export default Loaders