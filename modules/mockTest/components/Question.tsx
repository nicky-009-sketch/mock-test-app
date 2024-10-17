import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface IQuestionPropsType {
 questionIndex: number,
 questionText: string
}

const Question: React.FC<IQuestionPropsType> = (props) => {
 const { questionIndex, questionText } = props
 return (
  <View>
   <View style={styles.questionHeadingContainer}>
    <Text style={styles.questionNumber}>{questionIndex + 1}</Text>
    <Text style={styles.questionHeading}>Question</Text>
   </View>
   <View style={styles.question}>
    <Text style={styles.questionText}>{questionText}</Text>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 questionHeadingContainer: {
  flexDirection: 'row',
  paddingTop: 5,
  paddingBottom: 5,
 },
 questionNumber: {
  backgroundColor: '#F0F0F0',
  display: 'flex',
  margin: 0,
  padding: 0,
  paddingLeft: 6,
  paddingRight: 6,
  fontSize: 14,
  fontWeight: 500,
  borderRadius: 5
 },
 questionHeading: {
  fontSize: 15,
  fontWeight: 500,
  paddingLeft: 10
 },
 question: {
  paddingTop: 4,
  paddingBottom: 4
 },
 questionText: {
  fontSize: 14
 }
})

export default Question