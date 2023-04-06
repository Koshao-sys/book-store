import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
  error: '',
};

const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yPYTXXgu8Ri7U8UVbGtK/books';

export const getBooks = createAsyncThunk('book/getBooks', async (_, thunkAPI) => {
  try {
    const resp = await axios(Url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const addBook = createAsyncThunk('book/addBook', async (bookData, thunkAPI) => {
  try {
    const resp = await axios.post(Url, bookData);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const removeBook = createAsyncThunk('book/removeBook', async (id, thunkAPI) => {
  try {
    const resp = await axios.delete(`${Url}/${id}`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => ({ ...state, isLoading: true }),
    [getBooks.fulfilled]: (state, action) => {
      const { payload } = action;
      return { ...state, isLoading: false, books: payload };
    },
    [getBooks.rejected]: (state, action) => ({ ...state, isLoading: false, error: action.payload }),
    [addBook.pending]: (state) => ({ ...state, isLoading: false }),
    [addBook.fulfilled]: (state) => ({ ...state, isLoading: true }),
    [addBook.rejected]: (state, action) => ({ ...state, isLoading: false, error: action.payload }),
    [removeBook.pending]: (state) => ({ ...state, isLoading: true }),
    [removeBook.fulfilled]: (state) => ({ ...state, isLoading: false }),
    [removeBook.rejected]: (state, action) => {
      const err = action.payload;
      return { ...state, isLoading: false, error: err };
    },
  },
});

export default booksSlice.reducer;
