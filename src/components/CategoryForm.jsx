import React from 'react';
import classNames from 'classnames';

const CategoryForm = ( { isFormShown, onSubmitForm, onChangeFormVisibility } ) => {
  let input;
  const formClasses = classNames({
    'hide': !isFormShown
  })

  const handleSubmit = ( e ) => {
    e.preventDefault();
    onSubmitForm( input.value );
    onChangeFormVisibility( false )
    input.value = "";
  }

  const handleHideForm = ( e ) => {
    e.preventDefault()
    onChangeFormVisibility( false )
  }

  return (
    <div className="category-form">
      <form className={ formClasses } onSubmit={ handleSubmit }>
        <input type="text" ref={ node => input = node } />
        <input type="submit" />
        <button onClick={ handleHideForm }>Cancel</button>
      </form>
    </div>
  );
}


export default CategoryForm;
