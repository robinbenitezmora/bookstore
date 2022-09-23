import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

function Book({ book }) {
  const dispatch = useDispatch();
  const chapters = 100;
  const randomChapter = () => Math.floor(Math.random() * chapters);
  const [chapterFinished, setChapterFinished] = React.useState(randomChapter());

  const incrementCount = () => {
    setChapterFinished((prev) => {
      if (prev === 100) {
        return prev;
      } return prev + 1;
    });
  };

  const advanceChapter = (100 / chapters) * chapterFinished;

  return (
    <div className="book">
      <div className="book-info">
        <p className="book-category">{book.category}</p>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <div className="book-buttons">
          <button type="button" className="button">Comments</button>
          <div className="line">|</div>
          <button type="button" className="button" onClick={() => dispatch(removeBook(book))}>Remove</button>
          <div className="line">|</div>
          <button type="button" className="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <CircularProgressbar className="book-progress-bar" value={advanceChapter} text={`${chapterFinished}%`} />
      </div>
      <div className="chapter-info">
        <p className="chapter-info-text">CURRENT CHAPTER</p>
        <h2 className="chapter-info-advance">
          Chapter:
          {' '}
          {chapterFinished.toString()}
        </h2>
        <button type="button" className="chapter-info-button" onClick={incrementCount}>
          UPDATE PROGRESS
        </button>
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
