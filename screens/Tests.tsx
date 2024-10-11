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
import { fetchMockList } from '../services/redux/slices/mockTestSlice';

const Tests = () => {
  const dispatch = useAppDispatch()
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTest, setSelectedTest] = useState<any>(null);

  const { data: examData, isLoading: examLoading, error: examError } = useAppSelector((state) => state.exams);
  const routes = examData?.routes || [];
  const { data: mockTestData, isLoading: isMockTestLoading, error: mockTestError } = useAppSelector((state) => state.mockTest);
  const mockTestList = mockTestData?.listData || []


  const handleStart = (testItem: any) => {
    setSelectedTest(testItem)
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setModalVisible(false);
    navigation.navigate('Instructions', { selectedTest:selectedTest });
  };


  const handleTabChange = async (id: any) => {
    const examId = id;
    await dispatch(fetchMockList(examId))
  }

  const refreshMockTestList = async (examId: any) => {
    await dispatch(fetchMockList(examId)); // Fetch mock tests for the selected exam
  };

  const renderScene = SceneMap(
    Object.fromEntries(
      routes?.map((item: any) => [
        item.key,
        () => <Test
          data={mockTestList}
          handleStart={handleStart}
          isLoading={isMockTestLoading}
          refreshData={() => refreshMockTestList(item.key)}
        />
      ])
    )
  );

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchExams());
      if (routes.length > 0) {
        await dispatch(fetchMockList(routes[0].key));
      }
    };
    getData();
  }, [routes.length]);


  return (
    <View style={styles.container}>
      {
        examData &&
        <TabTop
          renderScene={renderScene}
          route={routes}
          handleTabChange={handleTabChange}
        />
      }
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