import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Store = () => {
  return (
    <View style={styles.constainer}>
      <Text>Comming Soon....</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

export default Store