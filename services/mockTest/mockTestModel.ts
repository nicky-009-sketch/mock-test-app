import { globalModel } from "../utils/global";
import apiProvider from "./apiProvider"
const ApiProvider = new apiProvider();
const gModel = new globalModel();

export default class mockTestModel {

 // const routes = [
 //  { key: 'first', title: 'First' },
 //  { key: 'second', title: 'Second' },
 //  { key: 'third', title: 'Third' },
 // ];

 fetchCategories = async (examId: string): Promise<any> => {
  try {
   const categoriesRes = await ApiProvider.categories(examId)
   const categories = await categoriesRes.json();
   if (categories?.status === 'success') {
    const data = categories?.data;
    function createdData(key: string, title: string) {
     return { key, title }
    }
    const routes = data && data?.map((val: any) => {
     return createdData(val?._id, val?.name)
    })
    return { routes }
   }
   console.log('categories', categories, examId)
  } catch (error) {
   console.log(error)
  }
 }

 fetchList = async (examId: string, categoryId:string): Promise<any> => {
  try {
   const listRes = await ApiProvider.list(examId, categoryId)
   const list = await listRes.json();
   if (list.status === 'success') {
    const data = list?.data
    function createdData(id: string | number, name: string, duration: string | number, marks: string | number) {
     return { id, name, duration, marks }
    }
    const listData = data && data.map((val: any) => {
     return createdData(val._id, val.name, val.duration, val.marks)
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
     testId: string | number,
     questionText: { hi: string, en: string },
     options: { option_text: { hi: string; en: string }; _id: string; option_id: number; isCorrect: boolean }[]
    ) {
     return {
      id,
      testId,
      questionText,
      options: options.map((option: any) => ({
       optionId: option.option_id,
       optionText: option.option_text,
       isCorrect: option.isCorrect,
      })),
     }
    }
    const questions = data && data.map((val: any) => {
     return createdData(
      val._id,
      val.test_id,
      val.question_text,
      val.options
     )
    })
    // console.log(JSON.stringify(testData))
    return { questions }
   }
  } catch (error) {
   console.log(error)
  }
 }

 submit = async (userId: string, testId: string, attempted: any, unattempted: any) => {
  try {
   const response = await ApiProvider.submission(userId, testId, attempted, unattempted)
   const jsonRes = await response.json();
   return jsonRes
  } catch (error) {
   throw error
  }
 }

}


// { id: 7, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'ENGLISH' },
