import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const RoomFooter: React.FC = () => {
 return (
  <View style={styles.buttonContainer}>
   <Pressable
    style={styles.clearButton}
    onPress={() => {
     // handleResponse({
     //  type: 'clear',
     //  questionId: mockTestQuestions[currentIndex]?.id,
     // })
    }}
   >
    <Text style={styles.clearText}>
     Clear Response
    </Text>
   </Pressable>
   <Pressable
    style={styles.submitButton}
    onPress={() => {
     // handleResponse({
     //  type: currentIndex === mockTestQuestions?.length - 1 ? 'submit' : 'next',
     // })
    }}
   >
    <Text style={styles.submitText}>
     {/* {currentIndex === mockTestQuestions?.length - 1 ? 'Submit' : 'Next'} */}
     Submit
    </Text>
   </Pressable>
  </View>
 )
}


const styles = StyleSheet.create({
 buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 16,
  borderTopWidth: 0.5,
  borderTopColor: 'gray',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
 },
 submitButton: {
  flex: 1,
  marginLeft: 8,
  padding: 8,
  alignItems: 'center',
  borderRadius: 4,
  backgroundColor: '#f44336',
 },
 submitText: {
  color: 'white',
 },
 clearButton: {
  flex: 1,
  marginRight: 8,
  borderWidth: 0.2,
  padding: 8,
  alignItems: 'center',
  borderRadius: 4,
 },
 clearText: {
  color: 'blue',
 },
})


export default RoomFooter