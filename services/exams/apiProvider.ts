
export default class apiProvider {

 list = async (): Promise<any> => {
  try {
   const url = 'http://192.168.0.119:9721/nodeapi/exam';
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