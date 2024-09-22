import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import questions from '../../question/questionModel';
const quesModel = new questions()

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, thunkAPI) => {
    try {
      const response = await quesModel.fetchAll();
      const [data] = response.data
      return data;
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

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const questionsReducer = questionsSlice.reducer; 
