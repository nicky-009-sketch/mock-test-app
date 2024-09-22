import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
const { width } = Dimensions.get('window');

const SignUp:React.FC <{navigation:any}> = ({navigation}) => {
 return (
  <View style={styles.container}>
   <View style={styles.headingContainer}>
    <Text style={styles.headingText}>Sign Up</Text>
   </View>
   <View style={styles.inputContainer}>
    <TextInput
     style={styles.textInput}
     placeholder='Enter your name'
    />
    <TextInput
     style={styles.textInput}
     placeholder='Enter your email'
    />
    <TextInput
     style={styles.textInput}
     placeholder='Enter your mobile'
    />
    <TouchableOpacity
     style={styles.button}
    >
     <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
   </View>
   <View style={styles.loginContainer}>
    <Text style={styles.loginText}>Already register ?</Text>
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
     <Text style={styles.loginTextbutton}>SignIn</Text>
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

export default SignUp