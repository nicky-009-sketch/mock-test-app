import { View, StyleSheet, Alert, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import TabTop from '../components/TabTop'
import { SceneMap } from 'react-native-tab-view';
import Test from '../components/Test';
import ModalConfirm from '../components/modals/ModalConfirm';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../services/redux/hooks';
import { fetchExams } from '../services/redux/slices/examSlice';

const Tests = () => {
  const dispatch = useAppDispatch()
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<any>(null);

  const handleStart = (id: number | string) => {
    // console.log('start clicked', id);
    setSelectedId(id);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    // console.log('OK Pressed', selectedId
    setModalVisible(false);
    navigation.navigate('Instructions', { id: selectedId });
  };


  const { data, isLoading, error } = useAppSelector((state) => state.exams)
  const routes = data?.routes || [];


  const renderScene = SceneMap(
    Object.fromEntries(
      routes?.map((item: any) => [
        item.key,
        () => <Test
          data={testData1}
          handleStart={handleStart}
        />
      ])
    )
  );

  const testData1 = [
    { id: 1, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'QUANT' },
    { id: 2, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'REASONING' },
    { id: 3, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'GK' },
    { id: 4, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'QUANT' },
    { id: 5, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'ENGLISH' },
    { id: 6, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'QUANT' },
    { id: 7, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'ENGLISH' },
  ]

  const handleTabChange = (id: any) => {
    console.log(id)
  }



  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchExams())
    }
    getData();
  }, [])

  return (
    <View style={styles.container}>
      {data && <TabTop
        renderScene={renderScene}
        route={routes}
        handleTabChange={handleTabChange}
      />}
      <View>
        <ModalConfirm
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleConfirm}
          title='Ready to start ?'
          message={
            <Text>
              Pay 20
              <FontAwesome5
                name="coins"
                size={14}
                color="#d3af37"
              />
              Conins
            </Text>
          }
          confirmActionText='Start'
          closeActionText='Not now'
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Tests