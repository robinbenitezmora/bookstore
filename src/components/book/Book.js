import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const [itemId, title, author, category] = props;
  const dispatch = useDispatch();

  return (
    <div className="container-book">
      <div className="book">
        <div className="book-info">
          <p className="book-category">{category}</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
          <div className="book-actions">
            <button type="button" className="btn btn-primary">Comments</button>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
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
    category: '',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }),
};
