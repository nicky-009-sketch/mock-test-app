import { globalModel } from "../utils/global";
import apiProvider from "./apiProvider"
const ApiProvider = new apiProvider();
const gModel = new globalModel();

export default class mockTestModel {

 fetchList = async (examId: string): Promise<any> => {
  try {
   const listRes = await ApiProvider.list(examId)
   const list = await listRes.json();
   if (list.status === 'success') {
    const data = list?.data
    function createdData(
     id: string | number,
     title: string,
     questions: number | string,
     duration: string | number,
     totalMarks: string | number,
     positiveMarks: string | number,
     negativeMarks: string | number,
     subject: String,
     coins: number | string
    ) {
     return {
      id,
      title,
      questions,
      duration,
      totalMarks,
      positiveMarks,
      negativeMarks,
      subject,
      coins
     }
    }
    const listData = data && data.map((val: any) => {
     return createdData(
      val._id,
      val.test_name,
      val.total_questions,
      val.test_duration,
      val.total_marks,
      val.positive_mark,
      val.negative_mark,
      'pending',
      10
     )
    })
    return { listData }
   }
  } catch (error) {
   console.log(error)
  }
 }

 fetchOne = async (testId: string): Promise<any> => {
  try {
   const testRes = await ApiProvider.findOne(testId)
   const test = await testRes.json();
   if (test?.status === 'success') {
    const data = test?.data
    function createdData(
     id: string | number,
     testId:string | number,
     questionText: {hi:string, en:string},
     options:{ option_text: { hi: string; en: string }; _id: string; option_id: number; isCorrect: boolean }[]
    ) {
     return {
      id,
      testId,
      questionText,
      options: options.map((option:any) => ({
       optionId: option.option_id,
       optionText: option.option_text,
       isCorrect: option.isCorrect,
     })),
     }
    }
    const questions = data && data.map((val:any)=>{
     return createdData(
      val._id,
      val.test_id,
      val.question_text,
      val.options
     )
    })
    // console.log(JSON.stringify(testData))
    return {questions}
   }   
  } catch (error) {
   console.log(error)
  }
 }

 submit = async (userId:string, testId:string, attempted:any, unattempted:any) => {
  try {
   const response = await ApiProvider.submission(userId, testId, attempted, unattempted)
   const jsonRes = await response.json();
   console.log(jsonRes)
  } catch (error) {
   console.log(error)
  }
 }

}


// { id: 7, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'ENGLISH' },
