import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const CountDown: React.FC<any> = ({ timeLimit, onComplete, subject }) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setTimeRemaining(timeLimit);
    setIsComplete(false); // Reset completion state when timeLimit changes
  }, [timeLimit]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime: any) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          setIsComplete(true); // Set completion state
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Effect to handle navigation when countdown is complete
  useEffect(() => {
    if (isComplete) {
      onComplete()
    }
  }, [isComplete, onComplete]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.subjectText}>{subject}</Text>
      <View style={styles.timer}>
        <Text style={styles.timerHeading}>Total time left:</Text>
        <Text style={styles.timerText}>{`${hours}h ${minutes}m ${seconds}s`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
  },
  subjectText:{
    fontSize:15,
    fontWeight:500
  },
  timer:{
    flexDirection:"row"
  },
  timerHeading:{fontSize:12},
  timerText: {
    color: '#E0115F',
    fontWeight: 500,
    fontSize: 12,
    marginLeft:3
  }
})

export default CountDown;
