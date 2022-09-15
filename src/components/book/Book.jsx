import React from 'react';

function Book({ title, author }) {
  return (
    <div className="container-book">
      <div className="info-book">
        <h4 className='category-book'>Category</h4>
        <h2 className='title-book'>{title}</h2>
        <h4 className='author-book'>{author}</h4>
      </div>
      <div className="actions-book">
        <button type="button" className='btn btn-primary'>Comments</button>
        <button type="button" className='btn btn-primary'>Remove</button>
        <button type="button" className='btn btn-primary'>Edit</button>
      </div>
    </div>
  );
}

export default Book;
