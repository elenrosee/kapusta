import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  register,
  fetchCurrentUser,
  updateUserBalance,
  fetchUserBalance,
} from './userOperations.js';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.headers.acces_token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.headers.acces_token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: state => {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending]: state => {
      state.isFetchingCurrent = true;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [fetchCurrentUser.rejected]: state => {
      state.isFetchingCurrent = false;
    },
    [updateUserBalance.fulfilled]: (state, action) => {
      state.user = action.payload.data;
    },
    [updateUserBalance.rejected]: state => {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchUserBalance.fulfilled]: (state, action) => {
      state.user.balance = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
