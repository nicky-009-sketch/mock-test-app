import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authModel from '../../auth/authModel';
const AuthModel = new authModel();

export const sendOtp = createAsyncThunk(
 'auth/sendOtp',
 async (email: string, thunkAPI) => {
  try {
   const response = await AuthModel.sendOtp(email)
   return response
  } catch (error) {
   return thunkAPI.rejectWithValue('Failed to send otp!');
  }
 }
);

export const signIn = createAsyncThunk(
 'auth/signIn',
 async (authData: {email:string, otp:number}, thunkAPI) => {
  const { email, otp } = authData;
  try {
   const response = await AuthModel.signIn(email, otp)
   return response
  } catch (error) {
   return thunkAPI.rejectWithValue('Failed to login!');
  }
 }
);

const initialState: any = {
 sendOtpResponse: null,
 signInResponse: null,
 isLoading: false,
 error: null,
 email:''
};

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(sendOtp.pending, (state) => {
    state.isLoading = true;
    state.error = null;
   })
   .addCase(sendOtp.fulfilled, (state, action) => {
    state.sendOtpResponse = action.payload;
    state.isLoading = false;
    state.email = action?.meta?.arg || ''
   })
   .addCase(sendOtp.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
   })
   .addCase(signIn.pending, (state) => {
    state.isLoading = true;
    state.error = null;
   })
   .addCase(signIn.fulfilled, (state, action) => {
    state.signInResponse = action.payload;
    state.isLoading = false;
   })
   .addCase(signIn.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
   });
 },
});

export const authReducer = authSlice.reducer; 
