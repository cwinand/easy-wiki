import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import classNames from 'classnames';

import PageList from '../containers/PageList'
import CategoryForm from './CategoryForm'

const DragHandle = SortableHandle( () => <i className="fa fa-sort fa-fw"></i> )

const CategoryItem = SortableElement( ( { category, selectedCategory, ...handlers } ) => {
  const { title, id, pages } = category
  const { onUpdateCategory, onSelectCategory, onRemoveCategory, onSelectPage, onChangeEditVisibility } = handlers

  const classes = classNames({
    'active': selectedCategory.id === id,
    'category-item': true
  })

  const handleSelectCategory = () => onSelectCategory( id )
  const handleRemoveCategory = () => onRemoveCategory( id )
  const handleSelectPage = ( id ) => onSelectPage( id )

  const handleChangeEditVisibility = ( status ) => { onChangeEditVisibility( status ) }
  const handleShowForm = () => handleChangeEditVisibility( true )
  const handleSubmitForm = ( title ) => { onUpdateCategory( id, title ) }

  return(
    <li className={ classes }>
      <a onClick={ handleSelectCategory } href="#">{ title }</a>
      <DragHandle />
      <div className="expanded-items">
        <div className="controls">
          <CategoryForm
            isFormShown={ selectedCategory.isFormShown }
            onChangeFormVisibility={ handleChangeEditVisibility }
            onSubmitForm={ handleSubmitForm } />

          <button onClick={ handleShowForm }><i className="fa fa-pencil"></i> Edit Category</button>
          <button onClick={ handleRemoveCategory }><i className="fa fa-minus"></i> Remove Category</button>

        </div>
        <PageList pageIds={ pages } onSelectPage={ handleSelectPage }/>
      </div>
    </li>
  );
});

export default CategoryItem;
