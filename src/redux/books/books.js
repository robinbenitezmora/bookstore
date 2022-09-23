import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/D4yRPSdRWrdzhF200FDV/books';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const firstState = [];

export default function booksReducer(state = firstState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}

const getBooks = createAsyncThunk(
  'bookstore/books/GET_BOOKS',
  async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  },
);

const addBook = createAsyncThunk(
  'bookstore/books/ADD_BOOK',
  async (book) => {
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  },
);

const removeBook = createAsyncThunk(
  'bookstore/books/REMOVE_BOOK',
  async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
);

export { getBooks, addBook, removeBook };
