import React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import CategoryItem from '../containers/CategoryItem'
import CategoryForm from './CategoryForm'

const SortableCategoryList = SortableContainer( ( props ) => {
  const { categoriesById, categoryIds, selectedCategory } = props;

  return(
    <ul className="navigation category-list">
      { categoryIds.map( ( id, index ) => (
        <CategoryItem
          key={ id }
          index={ index }
          category={ categoriesById[ id ] }
          selectedCategory={ selectedCategory } />
      )
      )}
    </ul>
  );
});

const CategoryList = ( props ) => {
  const { isFetching, categoriesById, categoryIds, selectedCategory, isFormShown } = props;
  const { onCreateCategory, onMoveCategory, onChangeNewVisibility } = props;

  const handleMoveCategory = ( { oldIndex, newIndex } ) => {
    if ( oldIndex !== newIndex ) {
      onMoveCategory( categoriesById, categoryIds, oldIndex, newIndex )
    }
  }

  const handleChangeNewVisibility = ( status ) => onChangeNewVisibility( status )
  const handleShowForm = () => onChangeNewVisibility( true )

  const handleSubmitForm = ( title ) => onCreateCategory( title )

  return(
    <div className="left-bar">
      <SortableCategoryList
        categoriesById={ categoriesById }
        categoryIds={ categoryIds }
        selectedCategory={ selectedCategory }
        useDragHandle={ true }
        onSortEnd={ handleMoveCategory } />

      <CategoryForm
        isFormShown={ isFormShown }
        onChangeFormVisibility={ handleChangeNewVisibility }
        onSubmitForm={ handleSubmitForm } />

      <button onClick={ handleShowForm } className="add-category-button">
        <i className="fa fa-plus fa-lg"></i> Add Category
      </button>
      <p>{ isFetching ? "Loading..." : "" }</p>
    </div>
  )
}

export default CategoryList;
