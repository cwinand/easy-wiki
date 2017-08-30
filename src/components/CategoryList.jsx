import React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import CategoryItem from '../containers/CategoryItem'
import CategoryForm from '../containers/CategoryForm'

const SortableCategoryList = SortableContainer( ( props ) => {
  const { categories, selected } = props;

  return(
    <ul className="navigation category-list">
      { categories.map( ( category, index  ) => (
        <CategoryItem
          key={ category.id }
          index={ index }
          category={ category }
          selected={ selected } />
      )
      )}
    </ul>
  );
});

const CategoryList = ( props ) => {
  const { isFetching, categories, selected } = props;
  const {  onMoveCategory } = props;

  const handleMoveCategory = ( { oldIndex, newIndex } ) => {
    if ( oldIndex !== newIndex ) {
      onMoveCategory( oldIndex, newIndex, categories )
    }
  }

  return(
    <div className="left-bar">
      <SortableCategoryList
        categories={ categories }
        selected={ selected }
        useDragHandle={ true }
        onSortEnd={ handleMoveCategory } />
      <CategoryForm />
      <p>{ isFetching ? "Loading..." : "" }</p>
    </div>
  )
}

export default CategoryList;
