import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  fetchSummary,
  fetchUserTransactions,
  removeTransaction,
} from './transactionsOperations';

const initialState = {
  transactions: [],
  summary: [],
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
        tr => tr?._id !== action.payload
      );
      state.isLoading = false;
    },
    [removeTransaction.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
