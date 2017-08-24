import React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import CategoryItem from './CategoryItem'
import AddCategory from '../containers/AddCategory'

const SortableCategoryList = SortableContainer( ( { categories, onRemoveCategory } ) => {

  const handleRemoveCategory = ( id, order ) => {
    onRemoveCategory( id, order );
  }

  return(
    <ol>
    { categories.map( ( category, index  ) => (
      <CategoryItem
        key={ category.id }
        index={ index }
        category={ category }
        onRemoveCategory={ handleRemoveCategory } />
    )
    )}
    </ol>
  );
});

const CategoryList = SortableContainer( ( { categories, isFetching, onRemoveCategory, onMoveCategory } ) => {

  const handleRemoveCategory = ( id, order ) => {
    onRemoveCategory( id, order );
  }

  const handleMoveCategory = ( { oldIndex, newIndex } ) => {
    if ( oldIndex !== newIndex ) {
      onMoveCategory( oldIndex, newIndex, categories )
    }
  }

  return(
    <div>
    <SortableCategoryList
      categories={ categories }
      onRemoveCategory={ handleRemoveCategory }
      onSortEnd={ handleMoveCategory } />
    <p>{ isFetching ? "Loading..." : "" }</p>
    <AddCategory />
    </div>
  );
});

export default CategoryList;
