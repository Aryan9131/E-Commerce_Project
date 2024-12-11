import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user:null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    clearUser: (state, action) =>  {
        state.user = null;
    }
  }
});
export default slice.reducer
// Actions
const { setUser, clearUser} = slice.actions