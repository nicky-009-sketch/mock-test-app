import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import examModel from '../../exams/examModel';
const exmModel = new examModel();

export const fetchExams = createAsyncThunk(
  'exam/fetchExams',
  async (_, thunkAPI) => {
    try {
      const response = await exmModel.fetchList();
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch questions');
    }
  }
);

const initialState: any = {
  data: null,
  isLoading: false,
  error: null,
};

const examSlice = createSlice({
  name: 'fetchExams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const examReducer = examSlice.reducer; 
