import React from 'react';
import BookList from '../components/library/Book-list';
import Form from '../components/form/Form';

const Books = () => (
  <div className="books-container">
    <div className="books">
      <div className="books-header">
        <h2 className="books-title">Books</h2>
        <div className="books-actions">
          <button type="button" className="btn btn-primary">Add new book</button>
        </div>
      </div>
      <div className="books-content">
        <BookList />
        <Form />
      </div>
    </div>
  </div>
);

// function Books() {
//   return (
//     <div className="container-books">
//       <BookList />
//       <Form />
//     </div>
//   );
// }

export default Books;
