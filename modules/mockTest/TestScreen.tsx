import { View, StyleSheet, ScrollView, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import useExams from './customHooks/useExams'
import TabViewTop from './components/TopTabs';
import useTest from './customHooks/useTest';
import Test from './components/Test';
import ModalConfirm from '../../components/modals/ModalConfirm';
import Loaders from '../../components/Loaders';

const TestScreen = () => {
 const { loading: examLoading, routes, index, setIndex, getExamId } = useExams();
 const examId = getExamId();
 const { loading: testLoading, mockTest, handleStart, modalData, isModalVisible, onModelConfirm, onModalClose } = useTest(examId);
 const { SpinLoader } = Loaders()

 return (
  <View style={styles.container}>
   <View style={styles.tabContainer}>
    <TabViewTop
     index={index}
     setIndex={setIndex}
     routes={routes}
    />
   </View>
   <ScrollView style={styles.testContainer}>
    {mockTest?.map((test: any, testIndex: any) => (
     <View key={testIndex}>
      <Test
       id={test.id}
       handleStart={handleStart}
       subject={test.subject}
       title={test.title}
       questions={test.questions}
       duration={test.duration}
       totalMarks={test.totalMarks}
       coins={test.coins}
      />
     </View>
    ))}
   </ScrollView>
   <ModalConfirm
    visible={isModalVisible}
    onClose={onModalClose}
    onConfirm={onModelConfirm}
    title={modalData?.title}
    message={modalData?.message}
    confirmActionText={modalData?.confirmText}
    closeActionText={modalData?.closeText}
   />
   <SpinLoader
    visible={testLoading}
   />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 tabContainer: {
  height: 48,
 },
 testContainer: {
  flex: 1,
  paddingStart: 10,
  paddingEnd: 10,
 },
});

export default TestScreen
