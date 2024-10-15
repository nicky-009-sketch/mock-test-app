import { useEffect, useState } from "react";

const useContDown = (duration: number, onTimeOut: any) => {
 const [timeRemaining, setTimeRemaining] = useState(duration);
 const [isComplete, setIsComplete] = useState(false);
 const onComplete = () => onTimeOut()

 useEffect(() => {
  setTimeRemaining(duration);
  setIsComplete(false);
 }, [duration]);

 useEffect(() => {
  const timerInterval = setInterval(() => {
   setTimeRemaining((prevTime: any) => {
    if (prevTime <= 1) {
     clearInterval(timerInterval);
     setIsComplete(true);
     return 0;
    }
    return prevTime - 1;
   });
  }, 1000);

  return () => clearInterval(timerInterval);
 }, []);

 useEffect(() => {
  if (isComplete) {
   onComplete()
  }
 }, [isComplete, onComplete]);

 const hours = Math.floor(timeRemaining / 3600);
 const minutes = Math.floor((timeRemaining % 3600) / 60);
 const seconds = timeRemaining % 60;
 const timer = `${hours} ${minutes} ${seconds}`

 return { timer }
}

export default useContDown