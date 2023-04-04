import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    AddBook: (state, { payload }) => {
      state.books.push({ payload });
    },
    RemoveBook: (state, action) => {
      const itemId = action.payload;
      state.books.push(state.books.filter((item) => item.id !== itemId));
    },
  },
});

export const { AddBook, RemoveBook } = booksSlice.actions;

export default booksSlice.reducer;
