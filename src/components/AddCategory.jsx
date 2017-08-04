import React from 'react';
import { connect } from 'react-redux';

import { addCategory } from '../actions/CategoriesActions';

const AddCategory = ({ dispatch }) => {
  let title;

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(title);
      dispatch(addCategory( title ))
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={ input => title = input.value } />
    </form>
  );
}


export default AddCategory;
