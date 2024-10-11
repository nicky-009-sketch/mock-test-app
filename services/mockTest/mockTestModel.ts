import { globalModel } from "../utils/global";
import apiProvider from "./apiProvider"
const ApiProvider = new apiProvider();
const gModel = new globalModel();

export default class mockTestModel {

 fetchOne = async (): Promise<any> => {
  try {
   const response = await ApiProvider.mockTest()
   await new Promise(resolve => setTimeout(resolve, 3000));
   return response
  } catch (error) {
   console.log(error)
  }
 }

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
      `${val.total_questions} Ques`,
      `${gModel.convertMillisecondsToTime(val.test_duration)}`,
      `${val.total_marks} Marks`,
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

}


// { id: 7, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'ENGLISH' },
