import { data } from "../../data/questions"

export default class {
 
 testQuestions = async (): Promise <any> => {
  try {
   const response =  data;
   return response;
  } catch (error) {
   console.error(error);
   throw error;
  }
 };

}