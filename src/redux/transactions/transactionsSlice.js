import { createSlice } from '@reduxjs/toolkit';

import {
  addTransaction,
  changeDate,
  changeType,
  fetchReportsData,
  fetchSummary,
  fetchUserTransactions,
  removeTransaction,
} from './transactionsOperations';

const initialState = {
  transactions: [],
  summary: [],
  reportsData: [],
  type: 'all',
  date: { day: null, month: null, year: null },
  isLoading: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchUserTransactions.pending]: state => {
      state.isLoading = true;
    },
    [fetchUserTransactions.fulfilled]: (state, action) => {
      state.transactions = action.payload.data;
      state.isLoading = false;
    },
    [fetchUserTransactions.rejected]: state => {
      state.isLoading = false;
    },
    [fetchSummary.pending]: state => {
      state.isLoading = true;
    },
    [fetchSummary.fulfilled]: (state, action) => {
      state.summary = action.payload.data;
      state.isLoading = false;
    },
    [fetchSummary.rejected]: state => {
      state.isLoading = false;
    },
    [fetchReportsData.pending]: state => {
      state.isLoading = true;
    },
    [fetchReportsData.fulfilled]: (state, action) => {
      state.reportsData = action.payload.data;
      state.isLoading = false;
    },
    [fetchReportsData.rejected]: state => {
      state.isLoading = false;
    },
    [addTransaction.pending]: state => {
      state.isLoading = true;
    },
    [addTransaction.fulfilled]: (state, action) => {
      state.transactions = [action.payload.data, ...state.transactions];
      state.isLoading = false;
    },
    [addTransaction.rejected]: state => {
      state.isLoading = false;
    },
    [removeTransaction.pending]: state => {
      state.isLoading = true;
    },
    [removeTransaction.fulfilled]: (state, action) => {
      state.transactions = state.transactions?.filter(
        tr => tr?._id !== action.payload.data._id
      );
      state.isLoading = false;
    },
    [removeTransaction.rejected]: state => {
      state.isLoading = false;
    },
    [changeDate]: (state, action) => {
      state.date = action.payload;
    },
    [changeType]: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
