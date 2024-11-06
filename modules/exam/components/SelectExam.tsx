import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useExam from '../useExam';

const SelectExam: React.FC<any> = () => {
 const { handleOpenSheet, selectedExam } = useExam()

 return (
  <TouchableOpacity
   onPress={handleOpenSheet}
  >
   <View className='flex-row justify-left'>
    <Text className='bg-gray-100 p-2 rounded-full ps-4 pe-4 text-base'>
     {selectedExam?.examName?.toUpperCase()}
    </Text>
   </View>
  </TouchableOpacity>
 )
}

export default SelectExam