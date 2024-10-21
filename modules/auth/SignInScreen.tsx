import { View, Text, Dimensions, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Formik, FormikProps } from 'formik';
import { signInSchema } from './schema';
import useAuth from './customHooks/useAuth';
const { width } = Dimensions.get('window');

const SignInScreen = () => {
 const { handleSignIn, loading, email } = useAuth();

 return (
  <View style={styles.container}>
   <View style={styles.headingContainer}>
    <Text style={styles.headingText}>Sign In</Text>
   </View>
   <View style={styles.inputContainer}>
    <Formik
     initialValues={{ email: email, otp: '' }}
     validationSchema={signInSchema}
     onSubmit={(
      values,
      {
       setSubmitting,
      }) => {
      handleSignIn(values);
      setSubmitting(false);
     }}
    >
     {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      touched
     }:FormikProps<{ email: string; otp: string}>
    ) => (
     <View>
      <TextInput
       style={styles.textInput}
       placeholder='Enter your OTP'
       onChangeText={handleChange('otp')}
       onBlur={handleBlur('otp')}
       value={values.otp}
       keyboardType='numeric'
      />
      {errors.otp && touched.otp && <Text style={styles.error}>{errors.otp}</Text>}
      {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
      <View style={styles.button}>
       <Button
        onPress={()=>{handleSubmit()}}
        title={loading ? 'Loading...' : 'SignIn'}
       />
      </View>
     </View>
     )}
    </Formik>
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

export default SignInScreen