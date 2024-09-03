import AuthSlice from './Slices/AuthSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
      auth: AuthSlice
    },
  })