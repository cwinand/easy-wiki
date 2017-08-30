import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import classNames from 'classnames';

import PageList from './PageList'
import CategoryForm from './CategoryForm'

const DragHandle = SortableHandle( () => <i className="fa fa-sort fa-fw"></i> )

const CategoryItem = SortableElement( ( { category, ...rest} ) => {
  const { title, id, pages } = category
  const { isFormShown, selected } = rest
  const { onUpdateCategory, onSelectCategory, onRemoveCategory, onSelectPage, onChangeFormVisibility } = rest

  const classes = classNames({
    'active': selected === id,
    'category-item': true
  })

  const handleSelectCategory = () => onSelectCategory( id )
  const handleRemoveCategory = () => onRemoveCategory( id )
  const handleSelectPage = ( id ) => onSelectPage( id )

  const handleChangeFormVisibility = ( status ) => { onChangeFormVisibility( status ) }
  const handleShowForm = () => handleChangeFormVisibility( true )
  const handleSubmitForm = ( title ) => { onUpdateCategory( id, title ) }

  return(
    <li onClick={ handleSelectCategory } className={ classes }>
      <a href="#">{ title }</a>
      <DragHandle />
      <div className="expanded-items">
        <div className="controls">
          <CategoryForm
            isFormShown={ isFormShown }
            onChangeFormVisibility={ handleChangeFormVisibility }
            onSubmitForm={ handleSubmitForm } />

          <button onClick={ handleShowForm }><i className="fa fa-pencil"></i> Edit Category</button>
          <button onClick={ handleRemoveCategory }><i className="fa fa-minus"></i> Remove Category</button>

        </div>
        <PageList pages={ pages } onSelectPage={ handleSelectPage }/>
      </div>
    </li>
  );
});

export default CategoryItem;
