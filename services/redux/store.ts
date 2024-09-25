import { configureStore } from '@reduxjs/toolkit'
import { mockTestReducer } from './slices/mockTestSlice'
import { examReducer } from './slices/examSlice'

export const store = configureStore({
  reducer: {
    mockTest: mockTestReducer,
    exams:examReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch