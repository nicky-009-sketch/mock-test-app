import { mockTestData } from "../../data/mockTest"

export default class apiProvider {
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

 findOne = async (testId: string): Promise<any> => {
  try {
   const url = 'http://192.168.0.119:9721/nodeapi/question/test-questions';
   const config:any = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({testId:testId} )
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

 submission = async (userId:string, testId:string, attempted:any, unattempted:any): Promise<any> => {
  try {
   const url = 'http://192.168.0.119:9721/nodeapi/mock/submission';
   const config:any = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({userId:userId,testId:testId,attempted:attempted,unattempted:unattempted})
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