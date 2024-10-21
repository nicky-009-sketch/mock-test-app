import { View, Text, Dimensions, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React from 'react'
import useAuth from './customHooks/useAuth';
const { width } = Dimensions.get('window');
import { sendOtpSchema } from './schema';
import { Formik, FormikHelpers } from 'formik';

const SendOtpScreen: React.FC = () => {
 const { navigateToSignUp, handleSendOtp, loading } = useAuth();

 return (
  <View style={styles.container}>
   <View style={styles.headingContainer}>
    <Text style={styles.headingText}>Sign In</Text>
   </View>
   <View style={styles.inputContainer}>
    <Formik
     initialValues={{ email: '' }}
     validationSchema={sendOtpSchema}
     onSubmit={(
      values,
      { setSubmitting }:
       FormikHelpers<{
        email: string;
       }>) => {
      handleSendOtp(values)
      setSubmitting(false);
     }}
    >
     {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      touched }
      :
      {
       handleChange: any;
       handleBlur: any;
       handleSubmit: () => void;
       values: { email: string };
       errors: { email?: string };
       touched: { email?: boolean };
      }
     ) => (
      <View>
       <TextInput
        style={styles.textInput}
        placeholder='Enter your email'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
       />
       {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
       <View style={styles.button}>
        <Button
         onPress={handleSubmit}
         title={loading ? 'Loading...' : 'Send Otp'}
        />
       </View>
      </View>
     )}
    </Formik>
   </View>
   <View style={styles.loginContainer}>
    <Text style={styles.loginText}>Not register ?</Text>
    <TouchableOpacity
     onPress={navigateToSignUp}
    >
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
 headingContainer: {
  marginBottom: width * 0.15
 },
 headingText: {
  fontSize: 25,
  fontWeight: 500
 },
 inputContainer: {
  padding: 10,
  width: width * 0.8,
 },
 textInput: {
  borderColor: 'gray',
  borderBottomWidth: 0.5,
  height: 40,
  color: 'gray',
  fontSize: 14,
 },
 button: {
  marginTop: 10
 },
 buttonText: {
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  fontSize: 14
 },
 loginContainer: {
  flexDirection: 'row',
 },
 loginText: {
  fontSize: 12
 },
 error: {
  color: 'red',
 },
 loginTextbutton: {
  marginLeft: 5,
  color: '#3b82f6',
  fontWeight: 500,
  fontSize: 12
 }
})

export default SendOtpScreen