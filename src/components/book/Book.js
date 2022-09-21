import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const { id, title, author } = book;

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="container-book">
      <div key={id} className="book">
        <div className="book-info">
          <p className="book-category">Category</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
          <div className="book-actions">
            <button type="button" className="btn btn-primary">Comments</button>
            <button type="button" className="btn btn-primary" onClick={handleRemoveBook}>Remove</button>
            <button type="button" className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    author: '',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
};
