import { useEffect, useState } from "react";
import { useBottomSheet } from "../../context/BottomSheetContext";
import { useAppDispatch, useAppSelector } from "../../services/redux/hooks"
import { fetchExams } from "../../services/redux/slices/examSlice"
import ExamList from "./components/ExamList";
import storageModel from "../../services/localStorage/storageModel";
const localStorageModel = new storageModel();

const useExam = () => {
  const dispatch = useAppDispatch();
  const { openBottomSheet } = useBottomSheet();
  const examList = useAppSelector(state => state?.exams?.data?.examList);
  const loading = useAppSelector(state => state?.exams?.isLoading);
  const error = useAppSelector(state => state.exams.error);
  const [selectedExam, setSelectedExam] = useState<{ id: number | null; examName: string }>({ id: null, examName: 'Select Exam' })

  const handleExams = async () => {
    return await dispatch(fetchExams()).unwrap()
  }
  const handleOpenSheet = async () => {
    try {
      const data = await handleExams();
      const examList = data?.examList
      openBottomSheet(<ExamList examList={examList} onSelect={handleExamSelect} />);
    } catch (err) {
      console.error("Failed to fetch exams:", err);
    }
  };
  const handleExamSelect = async (selectedExam: any) => {
    setSelectedExam(selectedExam)
    await localStorageModel.setSelectedExamToLocal(selectedExam)
  }
  useEffect(() => {
    const getItem = async () => {
      const selectedExam = await localStorageModel.getSelectedExamFromLocal()
      setSelectedExam(selectedExam)
    }
    getItem();
  }, [examList])

  return { handleExams, loading, error, handleOpenSheet, selectedExam }
}

export default useExam