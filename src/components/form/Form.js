import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const titleInput = useRef();
  const authorInput = useRef();
  const categoryInput = useRef();
  const dispatch = useDispatch();

  const manageTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const manageAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const manageCategory = (e) => {
    setBookCategory(e.target.value);
  };

  return (
    <div className="form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form
        className="form-content"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({
            item_id: uuidv4(),
            title: bookTitle,
            author: bookAuthor,
            category: bookCategory,
          }));
          titleInput.current.value = '';
          authorInput.current.value = '';
          categoryInput.current.value = '';
        }}
      >
        <input
          type="text"
          className="form-input"
          placeholder="Book title"
          onChange={(e) => manageTitle(e)}
          value={bookTitle}
          ref={titleInput}
          required
        />
        <input
          type="text"
          className="form-input"
          placeholder="Author"
          onChange={(e) => manageAuthor(e)}
          value={bookAuthor}
          ref={authorInput}
          required
        />
        <input
          type="text"
          className="form-input"
          placeholder="Category"
          onChange={(e) => manageCategory(e)}
          value={bookCategory}
          ref={categoryInput}
          required
        />
        <button type="submit" className="form-button">Add book</button>
      </form>
    </div>
  );
};

export default Form;
