import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './categories/categories';
import { booksReducer } from './books/books';

const storeBooks = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default storeBooks;
