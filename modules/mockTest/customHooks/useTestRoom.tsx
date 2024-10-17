import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCallback, useMemo, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import { submitMockTest } from "../../../services/redux/slices/mockTestSlice";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";

const useTestRoom = () => {
 const dispatch = useAppDispatch();
 const navigation: any = useNavigation();
 const mockTestQuestions = useAppSelector(state => state?.mockTest?.mockTestData?.questions);
 const mockTestSubmitResponse = useAppSelector(state => state?.mockTest?.submitResponse);
 const loading = useAppSelector(state => state?.mockTest?.isLoading);
 const error = useAppSelector(state => state.mockTest.error);
 const [language, setLanguage] = useState<string>('en')
 const [attempted, setAttempted] = useState<any>([])
 const [currentIndex, setCurrentIndex] = useState(0);
 const [confirmText, setConfirtText] = useState<string>('')
 const [modalVisible, setModalVisible] = useState(false);

 const onTimeOut = () => {
  console.log('time-out-call')
 }

 const changeLaguage = (language: string) => {
  const lang = language === 'hi' ? 'en' : 'hi'
  setLanguage(lang)
 }

 const bottomSheetModalRef = useRef<BottomSheetModal>(null);
 const snapPoints = useMemo(() => ['25%', '50%'], []);
 const handleBottomSheet = useCallback(() => {
  bottomSheetModalRef.current?.present();
 }, []);

 const pagerRef: any = useRef(null);

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

 const handleResponse = (payLoad: any) => {
  const { questionId, questionIndex, type } = payLoad;

  switch (type) {
   case 'next': {
    const nextIndex = currentIndex + 1;
    if (nextIndex < mockTestQuestions.length) {
     if (pagerRef.current) {
      pagerRef.current.setPage(nextIndex);
      setCurrentIndex(nextIndex);
     }
    }
    break;
   }

   case 'clear': {
    const newAttempted = attempted?.
     filter((item: any) => item.questionId !== questionId);
    setAttempted(newAttempted);
    break;
   }

   case 'switch': {
    if (pagerRef.current) {
     pagerRef.current.setPage(questionIndex);
    }
    break;
   }

   case 'submit': {
    setModalVisible(true);
    const text = `Your responses are saved successfully!
      Section,Attempted,Skipped,Total
      ${'mockTestName'},
      ${attempted?.length},
      ${mockTestQuestions?.length - attempted?.length},
      ${mockTestQuestions?.length}`;
    setConfirtText(text);
    break;
   }

   default:
    console.warn('Unknown action type:', type);
  }
 };

 const handelCurrentIndex = (position: any) => {
  setCurrentIndex(position);
 }

 const handleModalConfirm = async () => {
  setModalVisible(false);
  const attemptedQuestionIds = new Set(attempted?.
   map((item: any) => item?.questionId));
  const unattempted = mockTestQuestions?.
   filter((question: any) => !attemptedQuestionIds?.
    has(question?.id))?.
   map((question: any) => question?.id);
  const userId = '6705f99ae1cc4e748759343a'
  const testId = '6705f65ee1cc4e7487593430'
  const payload = { userId: userId, testId: testId, attempted: attempted, unattempted: unattempted }
  if (attempted && unattempted) {
   const submitRes: any = await dispatch(submitMockTest(payload))
   if (submitRes?.meta?.requestStatus === 'fulfilled') {
    const resMessage = submitRes.payload.message;
    showToast(resMessage);
   } else if (submitRes?.meta?.requestStatus === 'rejected') {
    const resMessage = submitRes.error?.message || 'Submission failed. Please try again.';
    showToast(resMessage);
   } else {
    showToast('Something went wrong.');
   }
   navigation.navigate('TestScreen');
  }
 }

 const showToast = (messageText: string) => ToastAndroid.show(messageText, ToastAndroid.SHORT);
 const handleModalVisible = () => setModalVisible(!modalVisible);

 return { onTimeOut, language, changeLaguage, handleBottomSheet, pagerRef, bottomSheetModalRef, snapPoints, mockTestQuestions, attempted, handleOptionClick, handleResponse, currentIndex, handelCurrentIndex, handleModalConfirm, handleModalVisible, modalVisible }
}

export default useTestRoom