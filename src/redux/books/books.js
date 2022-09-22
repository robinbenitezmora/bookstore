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

const getBooks = () => async (dispatch) => {
  const response = await fetch(API);
  const data = await response.json();
  const books = [];
  Object.keys(data).map((key) => books.push({ item_id: key, ...data[key][0] }));
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

const addBook = (book) => async (dispatch) => {
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

const removeBook = (id) => async (dispatch) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export { addBook, removeBook, getBooks };
