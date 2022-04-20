import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserTransactions = createAsyncThunk(
  'transactions/fetchUserTransactions',
  async ({ year, month, day }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/${year}/${month}/${day}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (newTransaction, thunkAPI) => {
    try {
      const { data } = await axios.post(`/transactions`, newTransaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'transactions/removeTransaction',
  async (idTransaction, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/transactions/${idTransaction}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSummary = createAsyncThunk(
  'transactions/fetchSummary',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/summary`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeDate = createAction('transactions/changeDate');

export const changeType = createAction('transactions/changeType');
