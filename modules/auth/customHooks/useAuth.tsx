import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../services/redux/hooks";
import { sendOtp, signIn } from "../../../services/redux/slices/authSlice";
import { ToastAndroid } from "react-native";
import { useEffect } from "react";
import storageModel from "../../../services/localStorage/storageModel";
import { useAuthProvider } from "../context/AuthProvider";

const useAuth = () => {
 const dispatch = useAppDispatch();
 const navigation: any = useNavigation();
 const localStorage = new storageModel();
 const { logIn, logOut } = useAuthProvider();
 const sendOtpResponse = useAppSelector(state => state.auth.sendOtpResponse);
 const email = useAppSelector(state => state?.auth?.email) || '';
 const loading = useAppSelector(state => state.auth.isLoading);
 const error = useAppSelector(state => state.auth.error);
 const showToast = (messageText: string) => ToastAndroid.show(messageText, ToastAndroid.SHORT);
 const navigateToSentOtp = () => { return navigation.navigate('SendOtpScreen') };
 const navigateToSignIn = () => { return navigation.navigate('SignInScreen') };
 const navigateToSignUp = () => { return navigation.navigate('SignUpScreen') };
 const navigateToApp = () => { return navigation.navigate('App') };

 const handleSendOtp = async ({ email }: { email: string }) => {
  const response = await dispatch(sendOtp(email))
  const resMessage = response?.payload?.message || 'Send successfully';
  const resStatus = response?.payload?.status || 'failed';
  if (resStatus === 'success') {
   showToast(resMessage);
   // navigateToSignIn();
  } else {
   showToast('Something went wrong!')
  }
 }

 const handleSignIn = async (data: { email: string, otp: string }) => {
  const { email, otp } = data;
  const authData = { email: email, otp: parseInt(otp) }
  const response = await dispatch(signIn(authData))
  const { payload: { message, status, token } } = response;
  if (status === 'success') {
   await localStorage.setTokenToLocal(token);
   logIn();
   showToast(message!);
   // navigateToApp();
  } else {
   showToast('Something weng wrong!')
  }
 }

 const handleSignOut = async () => {
  await localStorage.removeTokenFromLocal();
  logOut();
  showToast('signOut successfully!')
  // navigateToSentOtp();
 }

 useEffect(() => {
  if (error) {
   showToast(error)
  }
 }, [error])

 const handleSignUp = async (value: any) => {
 }



 return { navigateToSignIn, navigateToSentOtp, navigateToSignUp, handleSendOtp, handleSignIn, handleSignOut, handleSignUp, loading, email };
}

export default useAuth