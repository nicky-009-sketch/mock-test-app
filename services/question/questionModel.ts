import apiProvider from "./apiProvider"

const ApiProvider = new apiProvider()

export default class questions {

 fetchAll = async (): Promise<any> => {
  try {
   const response = await ApiProvider.testQuestions();
   await new Promise(resolve => setTimeout(resolve, 3000));
   return response
  } catch (error) {
   console.log(error)
  }
 }

}