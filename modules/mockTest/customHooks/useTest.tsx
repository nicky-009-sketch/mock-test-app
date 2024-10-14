import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import { fetchMockList } from "../../../services/redux/slices/mockTestSlice";

const useTest = (examId: string) => {
 const dispatch = useAppDispatch();
 const mockTest = useAppSelector(state => state.mockTest.data.listData);
 const loading = useAppSelector(state => state.mockTest.loading);
 const error = useAppSelector(state => state.mockTest.error);
 const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
 const [testId, setTestId] = useState<string | null>(null);

 const modalData = {
  title: 'Ready to start ?',
  message: 'Pay 20 coins',
  confirmText: 'Start',
  closeText: 'Not Now'
 }

 useEffect(() => {
  const fetchMockTestData = async () => {
   try {
    await dispatch(fetchMockList(examId))
   } catch (err) {
    console.error('Failed to fetch exams:', err);
   }
  };
  fetchMockTestData();
 }, [examId]);

 const handleStart = (id: string) => {
  setIsModalVisible(true)
  setTestId(id)
 };

 const onModalClose = () => setIsModalVisible(false);

 const onModelConfirm = () => {
  console.log('confirmbox', testId)
 }

 return { mockTest, loading, error, handleStart, modalData, isModalVisible, onModelConfirm, onModalClose };
}

export default useTest;