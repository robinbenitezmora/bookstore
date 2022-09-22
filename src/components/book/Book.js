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
        <p className="book-author">Author</p>
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
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;

// const Book = (props) => {
//   const [itemId, title, author, category] = props;
//   const dispatch = useDispatch();

//   return (
//     <div className="container-book">
//       <div className="book">
//         <div className="book-info">
//           <p className="book-category">{category}</p>
//           <h3 className="book-title">{title}</h3>
//           <p className="book-author">{author}</p>
//           <div className="book-actions">
//             <button type="button" className="btn btn-primary">Comments</button>
//             <button type="button" className="btn btn-primary" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
//             <button type="button" className="btn btn-primary">Edit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Book;

// Book.defaultProps = {
//   book: {
//     id: '',
//     title: '',
//     author: '',
//     category: '',
//   },
// };

// Book.propTypes = {
//   book: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     author: PropTypes.string,
//     category: PropTypes.string,
//   }),
// };
