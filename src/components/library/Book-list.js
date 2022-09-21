import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Book from '../book/Book';

const BookList = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const booksList = books.map((book) => (
    <Book key={book.id} book={book} />
  ));

  return (
    <div className="container-books">
      {booksList}
    </div>
  );
};

export default BookList;
