import { createSlice } from '@reduxjs/toolkit'

export let counterSlice = createSlice({
  name: 'productData',
  initialState : {
    productAdded: ""
  },
  reducers: {
    productAdded: (state, action ) => {
        state.productAdded = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { productAdded } = counterSlice.actions

export default counterSlice.reducer