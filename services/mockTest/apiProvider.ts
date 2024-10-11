import { mockTestData } from "../../data/mockTest"

export default class apiProvider {

 mockTest = async (): Promise<any> => {
  try {
   const response = mockTestData;
   return response;
  } catch (error) {
   console.error(error);
   throw error;
  }
 };

 list = async (examId: string): Promise<any> => {
  try {
   const url = 'http://192.168.0.119:9721/nodeapi/mock/exam-tests';
   const config:any = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({examId:examId} )

   }
   const response = await fetch(url, config)
   if (!response.ok) {
    console.error('HTTP error', response.status, response.statusText);
    throw new Error(`HTTP error! status: ${response.status}`);
   }
   return response
  } catch (error) {
   console.log('error', error);
   throw error;
  }
 };

}