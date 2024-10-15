import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks"
import { fetchExams } from "../../../services/redux/slices/examSlice";

const useExams = () => {
 const dispatch = useAppDispatch();
 const exams = useAppSelector(state => state.exams.data);
 const loading = useAppSelector(state => state.exams.isLoading);
 const error = useAppSelector(state => state.exams.error);
 const [index, setIndex] = useState(0);
 const routes = exams?.routes || [];

 useEffect(() => {
  const fetchExamsData = async () => {
   try {
    await dispatch(fetchExams());
   } catch (err) {
    console.error('Failed to fetch exams:', err);
   }
  };

  fetchExamsData();
 }, []);

 const getExamId = () => routes[index]?.key;
 return { loading, routes, index, setIndex, getExamId };
}

export default useExams;