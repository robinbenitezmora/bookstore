import React from 'react';

function Form() {
  return (
    <div className="container-form">
      <h2 className="title-form">ADD A NEW BOOK</h2>
      <form className="form" action="#">
        <input type="text" className="title" placeholder="Title" />
        <input type="text" className="author" placeholder="Author" />
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
