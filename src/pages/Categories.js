import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus(category));
  };

  return (
    <div className="container-categories">
      <button type="button" className="btn btn-primary" onClick={handleCheckStatus}>Check Status</button>
      <p>{category}</p>
    </div>
  );
};

export default Categories;
