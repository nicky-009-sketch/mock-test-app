import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExamList: React.FC<{ examList: any[], onSelect:any }> = ({ examList, onSelect }) => {
 return (
  <React.Fragment>
   {examList?.map((exam, listIndex) => {
    return (
     <View key={listIndex} style={styles.examContainer}>
      <Text>{exam?.examName?.toUpperCase()}</Text>
      <TouchableOpacity onPress={()=>{onSelect(exam)}}>
       <Text style={styles.selectText}>Select</Text>
      </TouchableOpacity>
     </View>
    );
   })}
  </React.Fragment>
 );
};

const styles = StyleSheet.create({
 examContainer: {
  backgroundColor: '#f7fafc',
  borderRadius: 4,
  marginBottom: 8,
  padding: 12,
  flexDirection: 'row',
  justifyContent: 'space-between',
 },
 selectText: {
  color: '#fc8181',
 },
});

export default ExamList;
