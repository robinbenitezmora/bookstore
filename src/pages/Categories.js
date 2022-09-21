import React from 'react';
import { useDispatch } from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(e.target.value);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={handleFilter}>Check Status</button>
  );
};

export default Categories;
