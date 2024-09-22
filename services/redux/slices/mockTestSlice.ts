import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import mockTestModel from '../../mockTest/mockTestModel';
const mtModel = new mockTestModel()

export const fetchMockTest = createAsyncThunk(
  'mockTest/fetchMockTest',
  async (_, thunkAPI) => {
    try {
      const response = await mtModel.fetchOne()
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

const mockTestSlice = createSlice({
  name: 'fetchMockTest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMockTest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMockTest.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMockTest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const mockTestReducer = mockTestSlice.reducer; 
