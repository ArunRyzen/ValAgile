// loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginStatus:  localStorage.getItem('loginStatus') || '', // Initial login status
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginStatus(state, action) {
      state.loginStatus = action.payload;
    },
  },
});

export const { setLoginStatus } = loginSlice.actions;
export default loginSlice.reducer;
