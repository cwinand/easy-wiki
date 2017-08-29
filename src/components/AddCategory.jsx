import React from 'react';
import classNames from 'classnames';

const AddCategory = ( { isFormShown, onAddCategory, onChangeFormVisibility } ) => {
  let input;
  const formClasses = classNames({ 'show': isFormShown })

  const handleSubmit = ( e ) => {
    e.preventDefault();
    onAddCategory( input.value );
    onChangeFormVisibility( false )
    input.value = "";
  }

  const showForm = ( e ) => {
    const inputEl = e.target.parentElement.querySelector('input[type=text]')
    onChangeFormVisibility( true )
    // Quick timeout to ensure the form has been shown
    setTimeout( () => inputEl.focus(), 5 )
  }

  const hideForm = ( e ) => {
    e.preventDefault()
    onChangeFormVisibility( false )
  }

  return (
    <div className="add-category category-form">
      <button onClick={ showForm }><i className="fa fa-plus fa-lg"></i> Add Category</button>
      <form className={ formClasses } onSubmit={ handleSubmit }>
        <input type="text" ref={ node => input = node } />
        <input type="submit" />
        <button onClick={ hideForm }>Cancel</button>
      </form>
    </div>
  );
}


export default AddCategory;
