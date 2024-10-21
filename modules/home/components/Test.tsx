import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
const { height } = Dimensions.get('window');


const Test: React.FC<any> = ({ testDetails }) => {
 const { questions, duration, title, subject } = testDetails
 return (
  <View className="rounded-lg w-48 h-30 bg-white rounded-lg relative mt-5 m-3">
   <View className="flex items-center justify-center mb-9">
    <View className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center absolute top-0 -translate-y-1/3">
     <Text className="text-red-500 text-xl font-bold">{subject}</Text>
    </View>
   </View>
   <Text className='absolute right-0 m-2 text-xs text-blue-400'>Now</Text>
   <View className="p-2">
    <Text className="text-lg font-semibold text-center text-base">{title}</Text>
    <View className='flex flex-row justify-center'>
     <Text className='text-center text-xs me-1'>• {questions} ques</Text>
     <Text className='text-center text-xs ms-1'>• {duration} mins</Text>
    </View>
   </View>
   <TouchableOpacity
    className='p-1 bg-red-500 rounded-b-lg'
   >
    <Text className='text-base text-white font-bold text-center'>
     Start
    </Text>
   </TouchableOpacity>
  </View>
 )
}





export default Test