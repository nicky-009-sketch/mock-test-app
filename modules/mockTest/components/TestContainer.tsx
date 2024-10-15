import { View, Text } from 'react-native'
import React from 'react'

const TestContainer:React.FC<{examId:string}> = ({examId}) => {
  return (
    <View>
      <Text>examId:{examId}</Text>
    </View>
  )
}

export default TestContainer