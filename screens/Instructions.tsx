import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../services/redux/hooks';
import { fetchMockTest } from '../services/redux/slices/mockTestSlice';

const Instructions = ({ route }: {route:any}) => {
  const navigation:any = useNavigation();
  const { id } = route.params;
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.mockTest)

  const onConfirm = async () => {
    await dispatch(fetchMockTest())
    navigation.navigate('TestRoom', { id });
  };

  return (
    <View style={styles.container}>
      <Text>Instructions</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>{questions?.isLoading?'Loading...':'Start Test'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
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
