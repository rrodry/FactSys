import { createSlice } from '@reduxjs/toolkit'

export let counterSlice = createSlice({
  name: 'userReducer',
  initialState : {
    userData: ""
  },
  reducers: {
    userData: (state, action ) => {
        state.userData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { userData } = counterSlice.actions

export default counterSlice.reducer