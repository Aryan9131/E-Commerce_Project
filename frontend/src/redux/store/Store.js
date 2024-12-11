import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../slices/ProductSlice'
import UserSlice from '../slices/UserSlice'
export const store = configureStore({
  reducer: {
    products:ProductReducer,
    user:UserSlice
  },
})