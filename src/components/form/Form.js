import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const titleInput = React.createRef();
  const authorInput = React.createRef();
  const categoryInput = React.createRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    titleInput.current.value = '';
    authorInput.current.value = '';
    categoryInput.current.value = '';
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Book title" ref={titleInput} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" ref={authorInput} onChange={(e) => setAuthor(e.target.value)} />
        <select name="category" id="category" ref={categoryInput} onChange={(e) => setCategory(e.target.value)}>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <button type="submit" className="btn btn-primary">Add book</button>
      </form>
    </div>
  );
};

export default Form;
