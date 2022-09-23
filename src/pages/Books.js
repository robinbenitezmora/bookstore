import React from 'react';
import BookList from '../components/library/Book-list';
import Form from '../components/form/Form';

function Books() {
  return (
    <div className="container-books">
      <BookList />
      <Form />
    </div>
  );
}

export default Books;
