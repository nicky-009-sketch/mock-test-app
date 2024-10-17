import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface IOptionPropsType {
 optionIndex: number,
 isSelected: boolean,
 optionText: string
}

const Option: React.FC<IOptionPropsType> = (props) => {
 const { optionIndex, isSelected, optionText } = props
 return (
  <View style={[isSelected ? styles.selectedOption : styles.option]}>
   <Text style={styles.optionNumber}>{['A', 'B', 'C', 'D'][optionIndex]}</Text>
   <Text style={isSelected ? styles.selectedOptionText : styles.optionText}>{optionText}</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 optionContainer: {
  paddingTop: 30,
  paddingBottom: 30,
 },
 option: {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F5F5F5',
  borderRadius: 8,
  padding: 12,
  marginBottom: 14,
 },
 selectedOption: {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#E0115F',
  borderRadius: 8,
  padding: 12,
  marginBottom: 14
 },
 optionNumber: {
  backgroundColor: 'white',
  textAlign: 'center',
  width: 22,
  height: 22,
  borderRadius: 100,
  fontSize: 14,
 },
 optionText: {
  fontSize: 14,
  marginStart: 10,
 },
 selectedOptionText: {
  color: 'white',
  fontSize: 14,
  marginStart: 10,
 },
})

export default Option