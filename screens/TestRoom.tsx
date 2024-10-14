import { View, Text, StyleSheet, TouchableOpacity, Pressable, Button } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import PagerView from 'react-native-pager-view';
import CountDown from '../components/CountDown';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useAppDispatch, useAppSelector } from '../services/redux/hooks';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import ModalConfirm from '../components/modals/ModalConfirm';
import TextTable from '../components/TextTable';
import { submitMockTest } from '../services/redux/slices/mockTestSlice';


const TestRoom = ({ route, navigation }: { route: any, navigation: any }) => {
  const { selectedTest } = route.params;
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.mockTest)
  const mockTestQuestions = data?.questions
  const mockTestName = selectedTest?.title
  const mockTestDuration = selectedTest?.duration

  const [attempted, setAttempted] = useState<any>([])
  const [language, setLanguage] = useState<string | null | undefined>('en')
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [confirmText, setConfirtText] = useState<string>('')

  // console.log('attempted', attempted)

  const handleOptionClick = (questionId: any, optionId: any) => {
    setAttempted((prev: any) => {
      const existingIndex = prev.findIndex((item: any) => item.questionId === questionId && item.optionId === optionId);
      if (existingIndex !== -1) {
        return prev.filter((item: any) => item.questionId !== questionId || item.optionId !== optionId);
      } else {
        const updated = prev.filter((item: any) => item.questionId !== questionId);
        return [...updated, { questionId, optionId }];
      }
    });
  };

  const handleComplete = () => {
    console.log('completed', attempted);
    // navigation.navigate('Tests');
  }


  const pagerRef: any = useRef(null);
  const handleResponse = (payLoad: any) => {
    const { questionId, questionIndex, type } = payLoad
    // console.log('payLoad', payLoad)

    if (payLoad?.type === 'next') {
      const nextIndex = currentIndex + 1;
      if (nextIndex < mockTestQuestions.length) {
        if (pagerRef.current) {
          pagerRef.current?.setPage(nextIndex);
          setCurrentIndex(nextIndex);
        }
      }
    }
    if (payLoad?.type === 'clear') {
      const newAttempted = attempted?.filter((item: any) => item.questionId !== payLoad.questionId)
      setAttempted(newAttempted)
    }
    if (payLoad?.type === 'switch') {
      if (pagerRef.current) {
        pagerRef.current.setPage(payLoad.questionIndex);
      }
    }
    if (payLoad?.type === 'submit') {
      setModalVisible(true);
      const text = `Your responses are saved successfully!
      Section,Attempted,Skipped,Total
      ${mockTestName},${attempted?.length},${mockTestQuestions?.length - attempted?.length},${mockTestQuestions?.length}`
      setConfirtText(text)
      // console.log('submit', attempted)
    }
  }

  const handleConfirm = async () => {
    // setModalVisible(false);    
    const attemptedQuestionIds = new Set(attempted?.map((item: any) => item?.questionId));
    const unattempted = mockTestQuestions?.
    filter((question: any) => !attemptedQuestionIds?.
    has(question?.id))?.
    map((question: any) => question?.id);
    const userId='6705f99ae1cc4e748759343a'
    const testId='6705f65ee1cc4e7487593430'
    if(attempted && unattempted){
      const submitRes = await dispatch(submitMockTest({
        userId:userId,
        testId:testId,
        attempted:attempted,
        unattempted:unattempted,
      }))
      console.log(submitRes)
    }
  }

  console.log(useAppSelector((state) => state.mockTest))


  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.pause}>
            <FontAwesome6 name="pause" size={28} color="#E0115F" />
          </View>
          <View style={styles.timerContainer}>
            <CountDown
              timeLimit={mockTestDuration}
              onComplete={handleComplete}
              subject={mockTestName}
            />
          </View>
        </View>
        <Pressable
          onPress={() => {
            const lang = language === 'hi' ? 'en' : 'hi'
            setLanguage(lang)
          }}
          style={styles.language}
        >
          <Text style={styles.languageText}>{language?.toUpperCase()}</Text>
        </Pressable>
        <View style={styles.sheetOpen}>
          <Pressable onPress={handlePresentModalPress}>
            <FontAwesome5 name="grip-horizontal" size={28} color="#E0115F" />
          </Pressable>
        </View>
      </View>

      <PagerView
        style={styles.pagerViewContainer}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => {
          setCurrentIndex(e.nativeEvent.position);
        }}
      >
        {mockTestQuestions?.map((ques: any, questionIndex: number) => {
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
        })}
      </PagerView>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.clearButton}
          onPress={() => {
            handleResponse({
              type: 'clear',
              questionId: mockTestQuestions[currentIndex]?.id,
            })
          }}
        >
          <Text style={styles.clearText}>
            Clear Response
          </Text>
        </Pressable>
        <Pressable
          style={styles.submitButton}
          onPress={() => {
            handleResponse({
              type: currentIndex === mockTestQuestions?.length - 1 ? 'submit' : 'next',
            })
          }}
        >
          <Text style={styles.submitText}>
            {/* {'Next'} */}
            {currentIndex === mockTestQuestions?.length - 1 ? 'Submit' : 'Next'}
          </Text>
        </Pressable>
      </View>

      <BottomSheetModalProvider>
        <View style={styles.bsContainer}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundStyle={styles.modalBackground}

          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <BottomSheetView style={styles.bsItemContainer}>
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
              </BottomSheetView>
            </ScrollView>
            <Pressable
              onPress={() => {
                handleResponse({
                  type: 'submit'
                })
              }}
              style={styles.bsButton}
            >
              <Text style={styles.bsBottonText}>Submit Test</Text>
            </Pressable>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>

      <ModalConfirm
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
      />

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























{/* <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.clearButton}
                  onPress={() => {
                    handleResponse({
                      type: 'clear',
                      questionId: ques?.id,
                      questionIndex: questionIndex + 1
                    })
                  }}
                >
                  <Text style={styles.clearText}>
                    Clear Response
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.submitButton}
                  onPress={() => {
                    handleResponse({
                      type: mockTestQuestions?.length === questionIndex + 1 ? 'submit' : 'next',
                      questionId: ques?.id,
                      questionIndex: questionIndex + 1
                    })
                  }}
                >
                  <Text style={styles.submitText}>
                    {mockTestQuestions?.length === questionIndex + 1 ? 'Submit' : 'Next'}
                  </Text>
                </Pressable>
              </View> */}

