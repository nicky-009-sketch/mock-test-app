import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view';
import CountDown from '../components/CountDown';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useAppSelector } from '../services/redux/hooks';

const TestRoom = ({ route, navigation }: { route: any, navigation: any }) => {
  const { id } = route.params;
  const handleComplete = () => {
    console.log('completed');
    navigation.navigate('Tests');
  }

  const { data, isLoading, error } = useAppSelector((state) => state.questions)
  const testName = data?.testName
  const questions = data?.questions

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.pause}>
          <FontAwesome6 name="pause" size={28} color="#E0115F" />
        </View>
        <View style={styles.timerContainer}>
          <CountDown
            timeLimit={100}
            onComplete={handleComplete}
            subject={testName}
          />
        </View>
      </View>

      <PagerView style={styles.pagerViewContainer} initialPage={0}>
        {questions?.map((ques: any, questionIndex: number) => {
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
                  ques.options.map((option: any, optionIndex: number) => {
                    return (
                      <View key={optionIndex} style={styles.option}>
                        <Text style={styles.optionNumber}>{['A', 'B', 'C', 'D'][optionIndex]}</Text>
                        <Text style={styles.optionText}>{option.text}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          )
        })}
      </PagerView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    marginTop: 60,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
  },
  pause: {
    padding: 12,
  },
  timerContainer: {
    padding: 10,
  },
  pagerViewContainer: {
    flex: 1,
    padding: 16
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
});

export default TestRoom

