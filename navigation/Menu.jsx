import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native'
import React from 'react'
import useAuth from '../modules/auth/customHooks/useAuth';
const { height } = Dimensions.get('window');

const Menu = ({ profile }) => {
 const {handleSignOut} = useAuth()
 return (
  // <View style={styles.container}>
  //  <View style={styles.profileContainer}>
  //   <Text style={styles.profileTitle}>R</Text>
  //   <View style={styles.profileText}>
  //    <Text style={styles.profileName}>{profile.name}</Text>
  //    <Text style={styles.profileEmail}>{profile.email}</Text>
  //   </View>
  //  </View>
  // </View>
  <View style={styles.container}>
   <View style={styles.profileContainer}>
    <Text style={styles.profileTitle}>R</Text>
    <View style={styles.profileText}>
     <Text style={styles.profileName}>{profile.name}</Text>
     <Text style={styles.profileEmail}>{profile.email}</Text>
    </View>
   </View>
   <View style={styles.logoutContainer}>
    <Button title="Logout" onPress={()=>{handleSignOut()}} color="#3b82f6" />
   </View>
  </View>
 )
}

// const styles = StyleSheet.create({
//  container: {
//   flex: 1,
//   marginTop: height * 0.06,
//  },
//  profileContainer: {
//   flexDirection: 'row',
//   display: 'flex',
//   alignItems: 'center',
//   borderBottomWidth: 0.5,
//   borderBottomColor: 'gray',
//   padding: 10
//  },
//  profileTitle: {
//   backgroundColor: '#3b82f6',
//   height: 50,
//   width: 50,
//   borderRadius: 100,
//   fontSize: 35,
//   fontWeight: 500,
//   color: 'white',
//   textAlign: 'center',
//  },
//  profileText: {
//   padding: 10
//  },
//  profileName: {
//   fontWeight: 700,
//   fontSize: 14
//  },
//  profileEmail: {
//   fontSize: 12,
//   fontWeight: 400
//  }
// })

const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: height * 0.06,
 },
 profileContainer: {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  borderBottomWidth: 0.5,
  borderBottomColor: 'gray',
  padding: 10,
 },
 profileTitle: {
  backgroundColor: '#3b82f6',
  height: 50,
  width: 50,
  borderRadius: 100,
  fontSize: 35,
  fontWeight: '500',
  color: 'white',
  textAlign: 'center',
 },
 profileText: {
  padding: 10,
 },
 profileName: {
  fontWeight: '700',
  fontSize: 14,
 },
 profileEmail: {
  fontSize: 12,
  fontWeight: '400',
 },
 logoutContainer: {
  marginTop: 'auto',
  padding: 10,
 },
});

export default Menu