import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('Action');
  const titleInput = React.createRef();
  const authorInput = React.createRef();
  const categoryInput = React.createRef();
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
    <div className="form-container">
      <h2 className="form-title">Add New Book</h2>
      <form
        className="form"
        onSubmit={(e) => {
          dispatch(addBook({
            item_id: uuidv4(),
            title: bookTitle,
            author: bookAuthor,
            category: bookCategory,
          }));
          e.preventDefault();
        }}
      >
        <input type="text" placeholder="Book Title" onChange={manageTitle} ref={titleInput} />
        <input type="text" placeholder="Author" onChange={manageAuthor} ref={authorInput} />
        <select onChange={manageCategory} ref={categoryInput}>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
