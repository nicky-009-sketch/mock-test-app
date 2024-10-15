import React from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator, RefreshControl } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

interface ITestDataTypeProps {
 id: string
 handleStart: any,
 subject: string;
 title: string;
 questions: string | number,
 duration: string | number,
 totalMarks: string | number,
 coins: string | number
}

const Test: React.FC<ITestDataTypeProps> = (props) => {
 const { id, handleStart, subject, title, questions, duration, totalMarks, coins } = props;
 return (
  <View
   style={styles.container}
  >
   <View style={styles.wrapper}>
    <View style={styles.information}>
     <View style={styles.iconContainer}>
      <Text style={styles.iconText}>
       <FontAwesome5
        name="book-reader"
        size={45}
        color="#3b82f6"
       />
      </Text>
      <Text style={styles.subjectText}>{subject}</Text>
     </View>
     <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{questions}</Text>
      <View style={styles.detailsContainer}>
       <Text style={styles.detailItem}>• {questions}</Text>
       <Text style={styles.detailItem}>• {duration}</Text>
       <Text style={styles.detailItem}>• {totalMarks}</Text>
      </View>
     </View>
    </View>
    <View style={styles.download}>
     <Pressable
      onPress={() => { handleStart(id) }}
     >
      <Text style={styles.downloadText}>Start</Text>
     </Pressable>
    </View>
    <View style={styles.coins}>
     <FontAwesome5
      name="coins"
      size={14}
      color="#d3af37"
     />
     <Text style={styles.coinsText}>{coins}</Text>
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  // backgroundColor:'red',
  marginTop:8
 },
 wrapper: {
  borderWidth: 0.5,
  borderColor: 'gray',
  borderRadius: 5,
  flexDirection: "row",
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: 10,
  position: 'relative',
  // marginBottom: 10,
 },
 information: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  flex: 1,
 },
 iconContainer: {
  borderWidth: 0.5,
  paddingTop: 4,
  borderColor: 'gray',
  height: 80,
  width: 80,
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: 10,
 },
 iconText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
 },
 subjectText: {
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: "#3b82f6",
  width: '100%',
  textAlign: 'center'
 },
 textContainer: {
  justifyContent: 'center',
  flex: 1,
 },
 title: {
  fontWeight: 'bold',
 },
 subtitle: {
  color: 'gray',
 },
 download: {
  padding: 10,
  borderRadius: 5,
  position: 'absolute',
  bottom: 0,
  right: 0,
  zIndex: 1,
 },
 downloadText: {
  color: '#3b82f6'
 },
 coins: {
  flexDirection: "row",
  display: 'flex',
  alignItems: 'center',
 },
 coinsText: {
  color: '#d3af37',
  paddingStart: 4,
  fontWeight: 500,
  fontSize: 14
 },
 detailsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
 },
 detailItem: {
  marginRight: 8,
  color: '#B2BEB5'
 },
});

export default Test;
