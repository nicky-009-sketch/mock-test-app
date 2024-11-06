import { mockTestData } from "../../data/mockTest"
import config from "../../config";

export default class apiProvider {

 categories = async (examId: string): Promise<any> => {
  try {
   const url = config.apiBaseUrl+'/nodeapi/mock/categories';
   const apiConfig:any = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({examId:examId} )
   }
   const response = await fetch(url, apiConfig)
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

 list = async (examId: string, categoryId:string): Promise<any> => {
  try {
   const url = config.apiBaseUrl+'/nodeapi/mock/exam-tests';
   const apiConfig:any = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({examId:examId, categoryId:categoryId} )
   }
   const response = await fetch(url, apiConfig)
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
   const url = 'http://192.168.0.108:9721/nodeapi/question/test-questions';
   const apiConfig:any = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({testId:testId} )
   }
   const response = await fetch(url, apiConfig)
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
   const url = 'http://192.168.0.108:9721/nodeapi/mock/submission';
   const apiConfig:any = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({userId:userId,testId:testId,attempted:attempted,unattempted:unattempted})
   }
   const response = await fetch(url, apiConfig)
   if (!response.ok) {
    // console.error('HTTP error', response.status, response.statusText);
    throw new Error(`HTTP error! status: ${response.status}`);
   }
   return response
  } catch (error) {
   // console.log('error', error);
   throw error;
  }
 };


}