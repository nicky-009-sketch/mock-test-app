import { View, Text, Dimensions, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React from 'react'
import useAuth from './customHooks/useAuth';
import { Formik, FormikHelpers } from 'formik';
const { width } = Dimensions.get('window');
import { signUpSchema } from './schema';

const SignUpScreen = () => {
 const { navigateToSignIn, handleSignUp } = useAuth();
 return (
  <View style={styles.container}>
   <View style={styles.headingContainer}>
    <Text style={styles.headingText}>Sign Up</Text>
   </View>
   <View style={styles.inputContainer}>
    <Formik
     initialValues={{
      name: '',
      email: '',
      mobile: ''
     }}
     validationSchema={signUpSchema}
     onSubmit={(
      values,
      { setSubmitting }:
       FormikHelpers<{
        name: string;
        email: string;
        mobile: string
       }>) => {
      console.log(values);
      setSubmitting(false);
     }}
    >
     {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      touched,
     }: {
      handleChange: any;
      handleBlur: any;
      handleSubmit: any;
      values: { name: string; email: string; mobile: string };
      errors: { name?: string; email?: string; mobile?: string };
      touched: { name?: boolean; email?: boolean; mobile?: boolean };
     }) => (
      <View>
       <TextInput
        style={styles.textInput}
        placeholder='Enter your full name'
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
       />
       {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}

       <TextInput
        style={styles.textInput}
        placeholder='Enter your email'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
       />
       {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

       <TextInput
        style={styles.textInput}
        placeholder='Enter your mobile number'
        keyboardType='numeric' // Ensures the numeric keyboard is shown
        onChangeText={handleChange('mobile')}
        onBlur={handleBlur('mobile')}
        value={values.mobile}
       />
       {errors.mobile && touched.mobile && <Text style={styles.error}>{errors.mobile}</Text>}

       <View style={styles.button}>
        <Button onPress={handleSubmit} title="Submit" />
       </View>
      </View>
     )}
    </Formik>
   </View>
   <View style={styles.loginContainer}>
    <Text style={styles.loginText}>Already registered?</Text>
    <TouchableOpacity onPress={navigateToSignIn}>
     <Text style={styles.loginTextbutton}>Sign In</Text>
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
  marginBottom: 5,
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

export default SignUpScreen