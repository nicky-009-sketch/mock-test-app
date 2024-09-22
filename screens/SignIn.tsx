import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');

const SignIn:React.FC <{navigation:any}> = ({navigation}) => {
  return (
   <View style={styles.container}>
   <View style={styles.headingContainer}>
    <Text style={styles.headingText}>Sign In</Text>
   </View>
   <View style={styles.inputContainer}>
    <TextInput
     style={styles.textInput}
     placeholder='Enter your email'
    />
    <TouchableOpacity
     style={styles.button}
     onPress={() => navigation.navigate('App')}
    >
     <Text style={styles.buttonText}>SIGN IN</Text>
    </TouchableOpacity>
   </View>
   <View style={styles.loginContainer}>
    <Text style={styles.loginText}>Not register ?</Text>
    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
     <Text style={styles.loginTextbutton}>SignUp</Text>
    </TouchableOpacity>
   </View>
  </View>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
 },
 headingContainer:{
  marginBottom:width*0.15
 },
 headingText:{
  fontSize:25,
  fontWeight:500
 },
 inputContainer: {
  padding: 10,
  width: width * 0.8,
 },
 textInput: {
  borderColor: 'gray',
  borderBottomWidth: 0.5,
  height: 40,
  borderRadius: 6,
  padding: 5,
  color: 'gray',
  marginBottom: 5,
  fontSize: 14
 },
 button: {
  backgroundColor: '#3b82f6',
  padding: 10,
  borderRadius: 5,
  width: '100%',
  marginTop: 10
 },
 buttonText: {
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  fontSize: 14
 },
 loginContainer: {
  flexDirection:'row',
 },
 loginText:{
  fontSize:12
 },
 loginTextbutton:{
  marginLeft:5,
  color:'#3b82f6',
  fontWeight:500,
  fontSize:12
 }
})

export default SignIn