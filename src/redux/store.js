import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './features/books/booksSlice';
import { categoriesReducer } from './features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: booksReducer,
    category: categoriesReducer,
  },
});

export default store;
