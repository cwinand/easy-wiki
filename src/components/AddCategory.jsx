import React from 'react';
import { connect } from 'react-redux';

const AddCategory = ( { onAddCategory } ) => {
  let input;

  const handleSubmit = ( e ) => {
      e.preventDefault();
      onAddCategory( input.value );
      input.value = "";
    }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" ref={ node => input = node } />
    </form>
  );
}


export default AddCategory;
