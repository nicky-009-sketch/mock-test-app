import { View, Text, StyleSheet, TouchableOpacity, Pressable, Button } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import PagerView from 'react-native-pager-view';
import CountDown from '../components/CountDown';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useAppSelector } from '../services/redux/hooks';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';


const TestRoom = ({ route, navigation }: { route: any, navigation: any }) => {
  const { id } = route.params;
  const { data, isLoading, error } = useAppSelector((state) => state.mockTest)
  const mockTestId = data?.id
  const mockTestName = data?.testName
  const mockTestQuestions = data?.questions
  const mockTestDuration = data?.duration
  const [attempted, setAttempted] = useState<any>([])
  const [initialPage, setInitialPage] = useState<number>(0)

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
    if (payLoad?.type === 'next') {
      if (pagerRef.current) {
        pagerRef.current.setPage(payLoad.id);
      }
    }
    if (payLoad?.type === 'submit') {
      console.log('submit', attempted)
    }
    if (payLoad?.type === 'clear') {
      console.log('clear')
    }

  }





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
        <View style={styles.sheetOpen}>
          <Pressable onPress={handlePresentModalPress}>
            <FontAwesome5 name="grip-horizontal" size={28} color="#E0115F" />
          </Pressable>
        </View>
      </View>

      <PagerView style={styles.pagerViewContainer} initialPage={0} ref={pagerRef}>
        {mockTestQuestions?.map((ques: any, questionIndex: number) => {
          return (
            <View key={questionIndex} style={styles.pagerViewContainer}>
              <View style={styles.questionHeadingContainer}>
                <Text style={styles.questionNumber}>{questionIndex + 1}</Text>
                <Text style={styles.questionHeading}>Question</Text>
              </View>
              <View style={styles.question}>
                <Text style={styles.questionText}>{ques.questionText}</Text>
              </View>
              <View style={styles.optionContainer}>
                {
                  ques?.options?.map((option: any, optionIndex: number) => {
                    const isSelected = attempted.find((item: any) => item?.questionId === ques?.id && item?.optionId === option?.id);
                    return (
                      <Pressable key={optionIndex} onPress={() => { handleOptionClick(ques?.id, option?.id); }}>
                        <View style={[isSelected ? styles.selectedOption : styles.option]}>
                          <Text style={styles.optionNumber}>{['A', 'B', 'C', 'D'][optionIndex]}</Text>
                          <Text style={isSelected ? styles.selectedOptionText : styles.optionText}>{option.text}</Text>
                        </View>
                      </Pressable>
                    )
                  })
                }
              </View>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.clearButton}
                  onPress={() => { handleResponse({ type: 'clear', id: ques?.id }) }}
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
                      id: ques?.id
                    })
                  }}
                >
                  <Text style={styles.submitText}>
                    {mockTestQuestions?.length === questionIndex + 1 ? 'Submit' : 'Next'}
                  </Text>
                </Pressable>
              </View>
            </View>
          )
        })}
      </PagerView>

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
                {Array.from({ length: 100 }, (_, index) => (
                  <View key={index} style={styles.bsItem}>
                    <Text>{index + 1}</Text>
                  </View>
                ))}
              </BottomSheetView>
            </ScrollView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>

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
    borderColor: '#E5E4E2'
  },
  bsItemContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
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
});

export default TestRoom

