import { createSlice } from '@reduxjs/toolkit';
import booksArray from '../../../components/booksArray';

const initialState = {
  books: booksArray,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      state.books.push(action.payload);
    },
    RemoveBook: (state, action) => {
      const itemId = action.payload;
      const newList = state.books.filter((item) => item.item_id !== itemId);
      return { ...state, books: newList };
    },
  },
});

export const { AddBook, RemoveBook } = booksSlice.actions;

export default booksSlice.reducer;
