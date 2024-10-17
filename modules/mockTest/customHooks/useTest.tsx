import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import { fetchMockList, fetchMockTest } from "../../../services/redux/slices/mockTestSlice";
import { useNavigation } from '@react-navigation/native';

const useTest = (examId?: string) => {
 const dispatch = useAppDispatch();
 const navigation: any = useNavigation();
 const mockTest = useAppSelector(state => state?.mockTest?.mockListData?.listData);
 const loading = useAppSelector(state => state?.mockTest?.isLoading);
 const error = useAppSelector(state => state.mockTest.error);
 const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
 const [testId, setTestId] = useState<string | null>(null);
 const [selectedTestData, setSelectedTestData] = useState<{}>()

 const modalData = {
  title: 'Ready to start ?',
  message: 'Pay 20 coins',
  confirmText: 'Start',
  closeText: 'Not Now'
 }

 useEffect(() => {
  const fetchMockTestData = async () => {
   if (!examId) return null
   try {
    await dispatch(fetchMockList(examId))
   } catch (err) {
    console.error('Failed to fetch exams:', err);
   }
  };
  fetchMockTestData();
 }, [examId]);

 const handleStart = (data: any) => {
  // console.log(selectedTestData)
  setSelectedTestData(data)
  setIsModalVisible(true)
  // setTestId(id)
 };

 const onModalClose = () => setIsModalVisible(false);

 const onModelConfirm = () => {
  setIsModalVisible(false)
  navigation.navigate('TestInstructions', { selectedTestData: selectedTestData });
 }

 const startTest = async (selectedTestData: any) => {
  const testId = selectedTestData?.id
  if (testId) await dispatch(fetchMockTest(testId))
  navigation.navigate('TestRoom', { selectedTestData: selectedTestData });
 }

 return { mockTest, loading, error, handleStart, modalData, isModalVisible, onModelConfirm, onModalClose, startTest };
}

export default useTest;