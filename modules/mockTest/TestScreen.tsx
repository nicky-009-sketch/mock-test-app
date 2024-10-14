import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import useExams from './customHooks/useExams'
import TabViewTop from './components/TopTabs';
import useTest from './customHooks/useTest';
import Test from './components/Test';
import ModalConfirm from '../../components/modals/ModalConfirm';

const TestScreen = () => {
 const { loading, routes, index, setIndex, getExamId } = useExams();
 const examId = getExamId();
 const { mockTest, handleStart, modalData, isModalVisible, onModelConfirm, onModalClose } = useTest(examId);

 return (
  <View style={styles.container}>
   <TabViewTop
    index={index}
    setIndex={setIndex}
    routes={routes}
   />
   <ScrollView>
    {mockTest?.map((test: any) => {
     return (
      <Test
       id={test?.id}
       handleStart={handleStart}
       subject={test.subject}
       title={test.title}
       questions={test.questions}
       duration={test.duration}
       totalMarks={test.totalMarks}
       coins={test.coins}
      />
     )
    })}
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
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1
 }
})

export default TestScreen