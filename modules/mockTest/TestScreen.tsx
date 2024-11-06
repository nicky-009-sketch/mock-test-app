import { View } from 'react-native'
import React from 'react'
import useTest from './customHooks/useTest';
import Test from './components/Test';
import Loaders from '../../components/Loaders';
import { SceneMap } from 'react-native-tab-view';
import TopTabView from '../../components/TopTabView';
import { ScrollView } from 'react-native-gesture-handler';

const TestScreen: React.FC<any> = ({ navigation }) => {
 const { handleTabChange, mockTestCategories, mockTestList, loading, error, handleStartTest } = useTest()
 const routes = mockTestCategories
 const { SpinLoader } = Loaders();

 return (
  routes &&
  <View className='bg-slate-100 flex-1'>
   <TopTabView
    routes={routes}
    renderScene={SceneMap(
     Object?.fromEntries(
      routes?.map((item: any) => [
       item.key,
       () => (
        <ScrollView showsVerticalScrollIndicator={false}>
         <Test
          data={mockTestList}
          onStart={handleStartTest}
         />
        </ScrollView>
       ),
      ])
     )
    )}
    handleTabChange={handleTabChange}
   />
   {loading}
   <SpinLoader visible={loading} />
  </View>
 );
};

export default TestScreen



























{/* <View style={styles.container}>
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
</View> */}
