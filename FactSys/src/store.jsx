import { configureStore } from '@reduxjs/toolkit'
import userData from '../src/reducer/userReducer'
import productData from '../src/reducer/productReducer'

export const store = configureStore({
  reducer: {
    userData : userData,
    productData: productData
  },
})