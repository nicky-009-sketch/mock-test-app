import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Loaders = () => {
 const SpinLoader = () => {
  return (
   <View style={styles.container}>
    <ActivityIndicator size="large" />
   </View>
  )
 }

 return { SpinLoader }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
});

export default Loaders