import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Book from '../book/Book';

function BookList() {
  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <div className="container-book-list">
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
