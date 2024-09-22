import { configureStore } from '@reduxjs/toolkit'
import { mockTestReducer } from './slices/mockTestSlice'

export const store = configureStore({
  reducer: {
    mockTest: mockTestReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch