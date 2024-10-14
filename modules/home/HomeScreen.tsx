import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Exam from './components/Exam';

const HomeScreen: React.FC = () => {
 const exams = [
  { id: 1, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 2, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 4, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 5, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 6, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 7, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 8, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 9, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
  { id: 10, name: 'SSC', Icon: <AntDesign name="book" size={28} color="#3b82f6" /> },
 ]
 return (
  <View style={styles.container}>
   <View style={styles.examContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
     {exams.map((exam) => (
      <View style={styles.exam} key={exam.id}>
       <Exam name={exam.name} Icon={exam.Icon} />
      </View>
     ))}
    </ScrollView>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
 },
 examContainer: {
   borderBottomWidth:0.2,
   borderColor:'gray',
   paddingTop:10, 
   paddingBottom:10
 },
 exam: {
   margin: 1,
   padding: 4,
 }
});

export default HomeScreen