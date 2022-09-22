import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="book-info">
        <p className="book-category">{book.category}</p>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">
          Author:
          {' '}
          {book.author}
        </p>
        <div className="book-buttons">
          <button type="button" className="book-button">Comments</button>
          <button type="button" className="book-button" onClick={() => dispatch(removeBook(book))}>Remove</button>
          <button type="button" className="book-button">Edit</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
