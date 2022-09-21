import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

function Form() {
  const [inputText, setInputText] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
    };

    dispatch(addBook(newBook));
    setInputText({ title: '', author: '' });
  };

  return (
    <div className="container-form">
      <h2 className="title-form">ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" value={inputText.title} onChange={onChange} placeholder="Book title" />
        <input type="text" name="author" value={inputText.author} onChange={onChange} placeholder="Author" />
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
