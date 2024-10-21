import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Test from './components/Test';

const HomeScreen: React.FC = () => {
  const testData = [
    {
      subject: 'GS',
      title: "General Knowledge",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'GS',
      title: "General Knowledge",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'GS',
      title: "General Knowledge",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'GS',
      title: "General Knowledge",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    }
  ];
  const MathData = [
    {
      subject: 'M',
      title: "Mathematics",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'M',
      title: "Mathematics",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'M',
      title: "Mathematics",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'M',
      title: "Mathematics",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
  ];

  const scienceData = [
    {
      subject: 'SC',
      title: "SCIENCE",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'SC',
      title: "SCIENCE",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'SC',
      title: "SCIENCE",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'SC',
      title: "SCIENCE",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'SC',
      title: "SCIENCE",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
  ];

  const polityData = [
    {
      subject: 'P',
      title: "POLITY",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'P',
      title: "POLITY",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'P',
      title: "POLITY",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'P',
      title: "POLITY",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
    {
      subject: 'P',
      title: "POLITY",
      description: "A test on basic algebra and geometry.",
      date: "2023-10-15",
      duration: 60,
      questions: 10
    },
  ]


  return (
    <View className='min-h-full'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='bg-slate-100 pt-6 pb-6 border-b border-slate-200'>
          <View className='flex flex-row justify-between item-center p-3'>
            <Text className='text-lg font-bold'>GS Quiz</Text>
            <Text className='text-blue-500'>See All {'>'}</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {testData.map((test, index) => (
              <Test key={index} testDetails={test} />
            ))}
          </ScrollView>
        </View>

        <View className='bg-slate-100 pt-6 pb-6 border-b border-slate-200'>
          <View className='flex flex-row justify-between item-center p-3'>
            <Text className='text-lg font-bold'>Math Quiz</Text>
            <Text className='text-blue-500'>See All {'>'}</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {MathData.map((test, index) => (
              <Test key={index} testDetails={test} />
            ))}
          </ScrollView>
        </View>

        <View className='bg-slate-100 pt-6 pb-6 border-b border-slate-200'>
          <View className='flex flex-row justify-between item-center p-3'>
            <Text className='text-lg font-bold'>Science Quiz</Text>
            <Text className='text-blue-500'>See All {'>'}</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {scienceData.map((test, index) => (
              <Test key={index} testDetails={test} />
            ))}
          </ScrollView>
        </View>
        <View className='bg-slate-100 pt-6 pb-6 border-b border-slate-200'>
          <View className='flex flex-row justify-between item-center p-3'>
            <Text className='text-lg font-bold'>Polity Quiz</Text>
            <Text className='text-blue-500'>See All {'>'}</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {polityData.map((test, index) => (
              <Test key={index} testDetails={test} />
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeScreen