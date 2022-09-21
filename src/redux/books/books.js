const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const firstState = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
  {
    id: '4',
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    category: 'Fantasy',
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    category: 'Fantasy',
  },
  {
    id: '6',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    category: 'Sci-Fi',
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
