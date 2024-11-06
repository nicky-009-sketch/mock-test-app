import config from "../../config";

export default class apiProvider {

 list = async (): Promise<any> => {
  try {
   const url = config.apiBaseUrl+"/nodeapi/exam";
   const response = await fetch(url)
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