import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import { fetchMockList, fetchMockTest, fetchMockTestCategories } from "../../../services/redux/slices/mockTestSlice";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import storageModel from "../../../services/localStorage/storageModel";
import { SceneMap } from "react-native-tab-view";
import Test from "../components/Test";
const localStorageModel = new storageModel();

const useTest = () => {
 const dispatch = useAppDispatch();
 const navigation: any = useNavigation();
 const mockTestList = useAppSelector(state => state?.mockTest?.mockListData?.listData);
 const mockTestCategories = useAppSelector(state => state?.mockTest?.mockCategoriesData?.routes);
 const loading = useAppSelector(state => state?.mockTest?.isLoading);
 const error = useAppSelector(state => state.mockTest.error);
 const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
 const [testId, setTestId] = useState<string | null>(null);
 const [examId, setExamId] = useState<string | null>(null);
 const [categoryId, setCategoryId] = useState<string | null>(null);
 const [selectedTestData, setSelectedTestData] = useState<{}>()

 const modalData = {
  title: 'Ready to start ?',
  message: 'Pay 20 coins',
  confirmText: 'Start',
  closeText: 'Not Now'
 }

 // useEffect(() => {
 //  const fetchMockTestData = async () => {
 //   if (!examId) return null
 //   try {
 //    await dispatch(fetchMockList(examId))
 //   } catch (err) {
 //    console.error('Failed to fetch exams:', err);
 //   }
 //  };
 //  fetchMockTestData();
 // }, [examId]);

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










 


 useEffect(() => {
  const getSelectedExam = async () => {
   const selectedExam = await localStorageModel.getSelectedExamFromLocal()
   const examId = selectedExam?.id
   setExamId(examId)
   dispatch(fetchMockTestCategories(examId))
  }
  getSelectedExam();
 }, [])

 const handleTabChange = (categoryId: string) => {
  if (examId) {
   setCategoryId(categoryId)
   dispatch(fetchMockList({ examId: examId, categoryId: categoryId }))
  }
 }

 const handleStartTest = (testId:string) => {
  console.log('testId', testId)
 }

 return { mockTestList, loading, error, handleTabChange, mockTestCategories, handleStartTest };
}

export default useTest;