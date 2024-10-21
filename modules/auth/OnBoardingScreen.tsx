import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import useAuth from './customHooks/useAuth';
const { width } = Dimensions.get('window');
const imgSrc = '../../assets/onboarding.jpg'

const OnBoardingScreen = () => {
 const { navigateToSentOtp } = useAuth();

 return (
  <View style={styles.container}>
   <Image
    source={require(imgSrc)}
    style={styles.image}
    resizeMode="cover"
   />
   <TouchableOpacity
    style={styles.button}
    onPress={navigateToSentOtp}
   >
    <Text
     style={styles.buttonText}
    >
     GET STARTED
    </Text>
   </TouchableOpacity>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
 },
 image: {
  width: width * 0.8,
  height: width * 0.8,
 },
 button: {
  backgroundColor: '#3b82f6',
  padding: 10,
  borderRadius: 5,
  width: '50%',
  marginTop: width * 0.3
 },
 buttonText: {
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
 }
});

export default OnBoardingScreen