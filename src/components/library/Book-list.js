import React from 'react';
import './Book-list.css';
import Book from '../book/Book';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ]
  return (
    <div className="container-book-list">
      <ul className="book-list">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
