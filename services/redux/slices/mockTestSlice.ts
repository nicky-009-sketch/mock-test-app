import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import mockTestModel from '../../mockTest/mockTestModel';
const mtModel = new mockTestModel()

export const fetchMockTestCategories = createAsyncThunk(
  'mockTest/fetchMockTestCategories',
  async (examId: string, thunkAPI) => {
    try {
      const response = await mtModel.fetchCategories(examId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetchMockList');
    }
  }
);

export const fetchMockList = createAsyncThunk(
  'mockTest/fetchMockList',
  async ({ examId, categoryId }: { examId: string; categoryId: string }, thunkAPI) => {
    try {
      const response = await mtModel.fetchList(examId,categoryId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch mock list');
    }
  }
);

export const fetchMockTest = createAsyncThunk(
  'mockTest/fetchMockTest',
  async (testId: string, thunkAPI) => {
    try {
      const response = await mtModel.fetchOne(testId)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch questions');
    }
  }
);

export const submitMockTest = createAsyncThunk(
  'mockTest/submitMockTest',
  async (responseData: { userId: string; testId: string; attempted: { questionId: string, optionId: string }[]; unattempted: string[] }, thunkAPI) => {
    try {
      const { userId, testId, attempted, unattempted } = responseData;
      const response = await mtModel.submit(userId, testId, attempted, unattempted);
      return response;
    } catch (error: any) {
      // console.error('Error submitting mock test:', error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to submit mock test');
    }
  }
);

const initialState: any = {
  mockCategoriesData: null,
  mockTestData: null,
  mockListData: null,
  submitResponse: null,
  isLoading: false,
  error: null,
};

const mockTestSlice = createSlice({
  name: 'fetchMockTest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // mock test categories
      .addCase(fetchMockTestCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMockTestCategories.fulfilled, (state, action) => {
        state.mockCategoriesData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMockTestCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //mock test list
      .addCase(fetchMockTest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMockTest.fulfilled, (state, action) => {
        state.mockTestData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMockTest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handling fetchMockList actions
      .addCase(fetchMockList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMockList.fulfilled, (state, action) => {
        state.mockListData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMockList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //handle submission test response
      .addCase(submitMockTest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitMockTest.fulfilled, (state, action) => {
        state.submitResponse = action.payload;
        state.isLoading = false;
      })
      .addCase(submitMockTest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const mockTestReducer = mockTestSlice.reducer; 
