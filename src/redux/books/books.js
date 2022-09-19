const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const firstState = [
  {
    id: 1,
    title: '',
    author: '',
    category: '',
  },
  {
    id: 2,
    title: '',
    author: '',
    category: '',
  },
  {
    id: 3,
    title: '',
    author: '',
    category: '',
  },
];

export default function booksReducer(state = firstState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export { addBook, removeBook };
