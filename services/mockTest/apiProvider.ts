import { mockTestData } from "../../data/mockTest"

export default class apiProvider {
 
 mockTest = async (): Promise <any> => {
  try {
   const response =  mockTestData;
   return response;
  } catch (error) {
   console.error(error);
   throw error;
  }
 };

}