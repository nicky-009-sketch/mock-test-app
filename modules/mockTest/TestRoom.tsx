import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import CountDown from './components/CountDown';
import useTestRoom from './customHooks/useTestRoom';
import PagerView from 'react-native-pager-view';
import { ScrollView } from 'react-native-gesture-handler';
import {
 BottomSheetModal,
 BottomSheetView,
 BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const TestRoom: React.FC = () => {
 const { onTimeOut, language, changeLaguage, handleBottomSheet, pagerRef, bottomSheetModalRef, snapPoints } = useTestRoom();

 return (
  <View style={styles.container}>
   <View style={styles.headerContainer}>
    <View style={styles.detailsContainer}>
     <View style={styles.pause}>
      <FontAwesome6 name="pause" size={28} color="#E0115F" />
     </View>
     <View style={styles.timerContainer}>
      <CountDown
       duration={5}
       onTimeOut={onTimeOut}
      />
     </View>
    </View>
    <Pressable
     onPress={() => {
      const lang = language === 'hi' ? 'en' : 'hi'
      changeLaguage(lang)
     }}
     style={styles.language}
    >
     <Text style={styles.languageText}>{language?.toUpperCase()}</Text>
    </Pressable>
    <View style={styles.sheetOpen}>
     <Pressable onPress={handleBottomSheet}>
      <FontAwesome5 name="grip-horizontal" size={28} color="#E0115F" />
     </Pressable>
    </View>
   </View>

   <PagerView
    style={styles.pagerViewContainer}
    initialPage={0}
    ref={pagerRef}
    // onPageSelected={(e) => {
    //  setCurrentIndex(e.nativeEvent.position);
    // }}
   >
    {/* {mockTestQuestions?.map((ques: any, questionIndex: number) => {
     return (
      <View key={questionIndex} style={styles.pagerViewContainer}>
       <View style={styles.questionHeadingContainer}>
        <Text style={styles.questionNumber}>{questionIndex + 1}</Text>
        <Text style={styles.questionHeading}>Question</Text>
       </View>
       <View style={styles.question}>
        <Text style={styles.questionText}>{ques?.questionText[language || 'en']}</Text>
       </View>
       <View style={styles.optionContainer}>
        {
         ques?.options?.map((option: any, optionIndex: number) => {
          const isSelected = attempted.find((item: any) => item?.questionId === ques?.id && item?.optionId === option?.optionId);
          return (
           <Pressable key={optionIndex} onPress={() => { handleOptionClick(ques?.id, option?.optionId); }}>
            <View style={[isSelected ? styles.selectedOption : styles.option]}>
             <Text style={styles.optionNumber}>{['A', 'B', 'C', 'D'][optionIndex]}</Text>
             <Text style={isSelected ? styles.selectedOptionText : styles.optionText}>{option?.optionText[language || 'en']}</Text>
            </View>
           </Pressable>
          )
         })
        }
       </View>
      </View>
     )
    })} */}
   </PagerView>

   <View style={styles.buttonContainer}>
    <Pressable
     style={styles.clearButton}
     // onPress={() => {
     //  handleResponse({
     //   type: 'clear',
     //   questionId: mockTestQuestions[currentIndex]?.id,
     //  })
     // }}
    >
     <Text style={styles.clearText}>
      Clear Response
     </Text>
    </Pressable>
    <Pressable
     style={styles.submitButton}
     // onPress={() => {
     //  handleResponse({
     //   type: currentIndex === mockTestQuestions?.length - 1 ? 'submit' : 'next',
     //  })
     // }}
    >
     <Text style={styles.submitText}>
      {/* {currentIndex === mockTestQuestions?.length - 1 ? 'Submit' : 'Next'} */}
     </Text>
    </Pressable>
   </View>

   <BottomSheetModalProvider>
    <View style={styles.bsContainer}>
     <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      backgroundStyle={styles.modalBackground}

     >
      <ScrollView showsVerticalScrollIndicator={false}>
       {/* <BottomSheetView style={styles.bsItemContainer}>
        {mockTestQuestions?.map((question: any, questionIndex: number) => {
         const isAttempted = attempted.find((item: any) => item?.questionId === question?.id);
         return (
          <Pressable
           key={questionIndex}
           onPress={() => {
            handleResponse({
             type: 'switch',
             questionId: question?.id,
             questionIndex: questionIndex
            })
           }}
           style={isAttempted ? styles.bsItemSelected : styles.bsItem}
          >
           <Text
            style={isAttempted ? styles.bsTextSelected : styles.bsText}
           >
            {questionIndex + 1}
           </Text>
          </Pressable>
         )
        })}
       </BottomSheetView> */}
      </ScrollView>
      <Pressable
       // onPress={() => {
       //  handleResponse({
       //   type: 'submit'
       //  })
       // }}
       style={styles.bsButton}
      >
       <Text style={styles.bsBottonText}>Submit Test</Text>
      </Pressable>
     </BottomSheetModal>
    </View>
   </BottomSheetModalProvider>

   {/* <ModalConfirm
    visible={modalVisible}
    onClose={() => setModalVisible(false)}
    onConfirm={handleConfirm}
    title='Test Summary'
    message={
     <View style={styles.textTableContainer}>
      <TextTable
       text={confirmText}
      />
     </View>
    }
    confirmActionText='Submit Test'
    closeActionText='No'
   /> */}

  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
 },
 headerContainer: {
  marginTop: 60,
  flexDirection: 'row',
  padding: 5,
  borderBottomWidth: 0.5,
  borderBottomColor: 'gray',
  justifyContent: 'space-between'
 },
 detailsContainer: {
  flexDirection: 'row'
 },
 pause: {
  padding: 12,
  justifyContent: 'space-evenly',
 },
 timerContainer: {
  padding: 10,
 },
 language: {
  // padding: 12,
  justifyContent: 'space-evenly',
 },
 languageText: {
  height: 20,
  width: 24,
  borderWidth: 1,
  borderColor: '#E0115F',
  borderRadius: 5,
  fontWeight: 500,
  fontSize: 12,
  textAlign: 'center',
  padding: 2
 },
 sheetOpen: {
  padding: 12,
  justifyContent: 'space-evenly',
 },
 pagerViewContainer: {
  flex: 1,
  padding: 16,
 },
 questionHeadingContainer: {
  flexDirection: 'row',
  paddingTop: 5,
  paddingBottom: 5,
 },
 questionNumber: {
  backgroundColor: '#F0F0F0',
  display: 'flex',
  margin: 0,
  padding: 0,
  paddingLeft: 6,
  paddingRight: 6,
  fontSize: 14,
  fontWeight: 500,
  borderRadius: 5
 },
 questionHeading: {
  fontSize: 15,
  fontWeight: 500,
  paddingLeft: 10
 },
 question: {
  paddingTop: 4,
  paddingBottom: 4
 },
 questionText: {
  fontSize: 14
 },
 optionContainer: {
  paddingTop: 30,
  paddingBottom: 30,
 },
 option: {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F5F5F5',
  borderRadius: 8,
  padding: 12,
  marginBottom: 14,
 },
 selectedOption: {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#E0115F',
  borderRadius: 8,
  padding: 12,
  marginBottom: 14
 },

 optionNumber: {
  backgroundColor: 'white',
  textAlign: 'center',
  width: 22,
  height: 22,
  borderRadius: 100,
  fontSize: 14,
 },
 optionText: {
  fontSize: 14,
  marginStart: 10,
 },
 selectedOptionText: {
  color: 'white',
  fontSize: 14,
  marginStart: 10,
 },
 buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 16,
  borderTopWidth: 0.5,
  borderTopColor: 'gray',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
 },
 submitButton: {
  flex: 1,
  marginLeft: 8,
  padding: 8,
  alignItems: 'center',
  borderRadius: 4,
  backgroundColor: '#f44336',
 },
 submitText: {
  color: 'white',
 },
 clearButton: {
  flex: 1,
  marginRight: 8,
  borderWidth: 0.2,
  padding: 8,
  alignItems: 'center',
  borderRadius: 4,
 },
 clearText: {
  color: 'blue',
 },
 bsContainer: {
  // flex: 1
 },
 modalBackground: {
  elevation: 25,
  borderWidth: 0.5,
  borderColor: '#E5E4E2',
 },
 bsItemContainer: {
  flex: 1,
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: 4,
 },
 bsItem: {
  width: '10%',
  height: 40,
  borderWidth: 0.5,
  borderRadius: 5,
  borderColor: 'red',
  margin: 5,
  justifyContent: 'center',
  alignItems: 'center',
 },
 bsItemSelected: {
  width: '10%',
  height: 40,
  borderWidth: 0.5,
  borderRadius: 5,
  margin: 5,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'pink',
  borderColor: 'white'
 },
 bsTextSelected: {
  color: 'white'
 },
 bsText: {
  color: 'black'
 },
 bsButton: {
  padding: 8,
  alignItems: 'center',
  borderRadius: 4,
  backgroundColor: '#f44336',
  margin: 10,
  marginTop: 16,
  marginBottom: 16
 },
 bsBottonText: {
  color: 'white',
  fontSize: 14,
  fontWeight: 500
 },
 textTableContainer: {
  width: 300,
 }
});

export default TestRoom