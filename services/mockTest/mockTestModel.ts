import apiProvider from "./apiProvider"

const ApiProvider = new apiProvider()

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

}