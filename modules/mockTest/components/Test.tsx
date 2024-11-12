import React from 'react';
import { View, Text, Pressable } from 'react-native';

interface ITestDataTypeProps {
 data: any;
 onStart: any;
}

const Test: React.FC<ITestDataTypeProps> = ({ data, onStart }) => {
 return (
  data &&
  <React.Fragment>
   {data?.map((val: any, itemIndex: number) => {
    return (
     <View key={itemIndex} className='p-2 ps-5 pe-5'>
      <View className='rounded-lg bg-white'>
       <View className='p-4'>
        <Text className='text-lg font-bold'>{val?.name}</Text>
        <View className='flex-row justify-between mt-1'>
         <View className='flex-row'>
          <Text className='text-slate-400'>40 Qs.</Text>
          <Text className='text-slate-400 ps-2 pe-2'>{val?.duration} mins</Text>
          <Text className='text-slate-400'>{val?.marks} Marks</Text>
         </View>
         <Pressable onPress={() => { onStart(val) }}>
          <Text className='text-red-400 font-bold'>Start test</Text>
         </Pressable>
        </View>
       </View>
       <View className='bg-red-400 p-1 ps-4 rounded-b-lg'>
        <Text className='text-white'>English, Hindi</Text>
       </View>
      </View>
     </View>
    )
   })}
  </React.Fragment>
 );
};

export default Test;
