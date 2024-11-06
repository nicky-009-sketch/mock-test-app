import React from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SelectExam from '../modules/exam/components/SelectExam';

const Header: React.FC<{ navigation: any, onOpen: any }> = ({ navigation, onOpen }) => {

 return (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff', elevation: 2, paddingTop: 60 }}>
   <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <FontAwesome6 name="bars" size={24} color="#000" />
   </TouchableOpacity>
   <View className='flex-1 ps-4 pe-4'>
    <SelectExam />
   </View>
   <TouchableOpacity onPress={() => navigation.navigate('Store')}>
    <FontAwesome6 name="sack-dollar" size={24} color="#d3af37" />
   </TouchableOpacity>
  </View>
 )
}


export default Header