export default class apiProvider {

 sendOpt = async (email: string) => {
  try {
   const url = 'http://192.168.0.108:9721/nodeapi/user/generate-otp';
   const config: any = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
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
 }

 signIn = async (email: string, otp: number) => {
  try {
   const url = 'http://192.168.0.108:9721/nodeapi/user/login'; 
   const config: any = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, otp: otp })
   }
   const response = await fetch(url, config)
   if (!response.ok) {
    // console.error('HTTP error', response.status, response.statusText);
    throw new Error(`HTTP error! status: ${response.status}`);
   }
   return response
  } catch (error) {
   console.log('error', error);
   throw error;
  }
 }

 signUp = async (name: string, email: number, mobile: number) => {
  try {

  } catch (error) {
   console.log('error', error);
   throw error;
  }
 }

}