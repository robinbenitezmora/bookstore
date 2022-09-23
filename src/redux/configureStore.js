import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const storeBooks = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default storeBooks;
