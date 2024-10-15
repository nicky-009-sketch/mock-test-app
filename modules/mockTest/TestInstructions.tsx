import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import useTest from './customHooks/useTest';

const TestInstructions: React.FC<{ route: any }> = ({ route }) => {
 const { testId } = route.params;
 const { startTest } = useTest(testId)

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.button}
    onPress={startTest}
   >
    <Text
     style={styles.buttonText}
    >
     Start Test
    </Text>
   </TouchableOpacity>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 20,
 },
 button: {
  padding: 10,
  backgroundColor: '#007BFF',
  borderRadius: 5,
  marginHorizontal: 20,
  alignItems: 'center',
 },
 buttonText: {
  color: 'white',
  fontWeight: 'bold',
 },
});

export default TestInstructions