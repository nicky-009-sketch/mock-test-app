import apiProvider from "./apiProvider";
const ApiProvider = new apiProvider();

export default class authModel{
 sendOtp = async (email: string): Promise<any> => {
  try {
   const sendOtpRes = await ApiProvider.sendOpt(email)
   const sendOtp = await sendOtpRes.json();
   return sendOtp
  } catch (error) {
   throw error
  }
 }

 signIn = async (email: string, otp:number): Promise<any> => {
  try {
   const signInRes = await ApiProvider.signIn(email, otp)
   const signIn = await signInRes.json();
   return signIn
  } catch (error) {
   throw error
  }
 }
}