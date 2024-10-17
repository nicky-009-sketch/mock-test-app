import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CountDown from './CountDown';

interface RoomHeaderPropsType {
 onTimeOut: any;
 language:string;
 changeLaguage:any
 handleBottomSheet:any
 duration:number;
 title:string
}
const RoomHeader: React.FC<RoomHeaderPropsType> = (props) => {
 const { onTimeOut, language, changeLaguage, handleBottomSheet, duration, title} = props
 return (
  <View style={styles.headerContainer}>
   <View style={styles.detailsContainer}>
    <View style={styles.pause}>
     <FontAwesome6
      name="pause"
      size={28}
      color="#E0115F"
     />
    </View> 
    <View style={styles.timerContainer}>
    <Text>{title}</Text>
     <CountDown
      duration={duration}
      onTimeOut={onTimeOut}
     />
    </View>
   </View>
   <Pressable
    onPress={() => {
     changeLaguage(language)
    }}
    style={styles.language}
   >
    <Text
     style={styles.languageText}
    >
     {language?.toUpperCase()}
    </Text>
   </Pressable>
   <View style={styles.sheetOpen}>
    <Pressable
    onPress={handleBottomSheet}
    >
     <FontAwesome5
      name="grip-horizontal"
      size={28}
      color="#E0115F"
     />
    </Pressable>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 headerContainer: {
  marginTop: 60,
  flexDirection: 'row',
  padding: 5,
  borderBottomWidth: 0.5,
  borderBottomColor: 'gray',
  justifyContent: 'space-between'
 },
 detailsContainer: {
  flexDirection: 'row'
 },
 pause: {
  padding: 12,
  justifyContent: 'space-evenly',
 },
 timerContainer: {
  padding: 10,
 },
 language: {
  // padding: 12,
  justifyContent: 'space-evenly',
 },
 languageText: {
  height: 20,
  width: 24,
  borderWidth: 1,
  borderColor: '#E0115F',
  borderRadius: 5,
  fontWeight: 500,
  fontSize: 12,
  textAlign: 'center',
  padding: 2
 },
 sheetOpen: {
  padding: 12,
  justifyContent: 'space-evenly',
 },
})

export default RoomHeader