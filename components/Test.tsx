import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

const Test: React.FC<{ data: any, handleStart: any }> = ({ data, handleStart }) => {

 return (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
   {data?.map((test: any) => {
    return (
     <View key={test.id} style={styles.wrapper}>
      <View style={styles.information}>
       <View style={styles.iconContainer}>
        <Text style={styles.iconText}>
         <FontAwesome5 name="book-reader" size={45} color="#3b82f6" />
        </Text>
        <Text style={styles.subjectText}>{test.subject}</Text>
       </View>
       <View style={styles.textContainer}>
        <Text style={styles.title}>{test.title}</Text>
        <Text style={styles.subtitle}>{test.questions} Questions</Text>
        <View style={styles.detailsContainer}>
         <Text style={styles.detailItem}>• {test.questions} Questions</Text>
         <Text style={styles.detailItem}>• {test.duration} Mins</Text>
         <Text style={styles.detailItem}>• {test.marks} Marks</Text>
        </View>
       </View>
      </View>
      <View style={styles.download}>
       <Pressable onPress={()=>{handleStart(test?.id)}}>
        <Text style={styles.downloadText}>Start</Text>
       </Pressable>
      </View>
      <View style={styles.coins}>
       <FontAwesome5 name="coins" size={14} color="#d3af37" />
       <Text style={styles.coinsText}>20</Text>
      </View>
     </View>
    )
   })}
  </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 5,
  paddingLeft: 10,
  paddingRight: 10,
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
  marginBottom: 10,
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
