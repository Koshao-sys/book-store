import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/books/booksSlice';
import categoryReducer from './features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
