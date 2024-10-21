import { configureStore } from '@reduxjs/toolkit'
import { mockTestReducer } from './slices/mockTestSlice'
import { examReducer } from './slices/examSlice'
import { authReducer } from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    mockTest: mockTestReducer,
    exams:examReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch