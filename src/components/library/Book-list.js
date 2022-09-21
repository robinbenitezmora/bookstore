import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import Book from '../book/Book';

const BookList = () => {
  const books = useSelector((state) => state.books, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  });

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
