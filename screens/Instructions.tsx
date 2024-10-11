import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../services/redux/hooks';
import { fetchMockTest } from '../services/redux/slices/mockTestSlice';
import TextTable from '../components/TextTable';

const Instructions = ({ route }: { route: any }) => {
  const navigation: any = useNavigation();
  const { selectedTest } = route.params;
  const id = selectedTest?.id
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.mockTest)


  const text = `Instructions:-
  Instruction for your examination is bellow:
  Section Name,No. of Question,Marks,Negative Marks,Positive Marks
  Chapter Test,120,120,1,0.33
  1) The total time allocated for the examination is 12 minutes.
  2) The server will synchronize your clock. In the top right corner of your screen, a countdown timer will display the remaining time for you to complete the exam. Once the timer reaches zero, the examination will automatically end. You do not need to submit the paper when the timer expires..
  3) However, there will be sectional timing for this exam. You must complete each section within the specified time limit. Before moving on to the next section, you must finish the current one within the allotted time.`;

  const onConfirm = async () => {
    console.log(selectedTest)
    await dispatch(fetchMockTest())
    navigation.navigate('TestRoom', { id });
  };

  return (
    <View style={styles.container}>
      <TextTable
        text={text}
      />
      <TouchableOpacity style={styles.button} onPress={onConfirm}>
        <Text style={styles.buttonText}>{questions?.isLoading ? 'Loading...' : 'Start Test'}</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default Instructions;
