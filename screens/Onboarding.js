import { View, Text, Button, Dimensions, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/onboarding.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
  },
  button:{
    backgroundColor:'#3b82f6',
    padding:10,
    borderRadius:5,
    width:'50%',
    marginTop:width*0.3
  },
  buttonText:{
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
  }
});

export default Onboarding



