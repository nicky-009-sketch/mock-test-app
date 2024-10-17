import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import useContDown from '../customHooks/useCountDown'

const CountDown: React.FC<{duration:number, onTimeOut:any}> = ({duration, onTimeOut}) => {
 const {timer} = useContDown(duration, onTimeOut)

 return (
  <View style={styles.container}>
   <View style={styles.timer}>
    <Text style={styles.timerHeading}>Total time left:</Text>
    <Text style={styles.timerText}>{timer}</Text>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container:{
 },
 subjectText:{
   fontSize:15,
   fontWeight:500
 },
 timer:{
   flexDirection:"row"
 },
 timerHeading:{fontSize:12},
 timerText: {
   color: '#E0115F',
   fontWeight: 500,
   fontSize: 12,
   marginLeft:3
 }
})


export default CountDown