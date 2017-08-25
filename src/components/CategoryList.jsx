import React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import CategoryItem from './CategoryItem'
import AddCategory from '../containers/AddCategory'

const SortableCategoryList = SortableContainer( ( props ) => {
  const { categories, selected } = props;
  const { onSelectCategory, onRemoveCategory } = props;

  const handleSelectCategory = ( id ) => {
    onSelectCategory( id );
  }

  const handleRemoveCategory = ( id, order ) => {
    onRemoveCategory( id, order );
  }

  return(
    <ul className="navigation category-list">
      { categories.map( ( category, index  ) => (
        <CategoryItem
          key={ category.id }
          index={ index }
          category={ category }
          selected={ selected }
          onSelectCategory={ handleSelectCategory }
          onRemoveCategory={ handleRemoveCategory } />
      )
      )}
    </ul>
  );
});

const CategoryList = ( props ) => {
  const { isFetching, categories, selected } = props;
  const { onSelectCategory, onRemoveCategory, onMoveCategory } = props;

  const handleSelectCategory = ( id ) => {
    onSelectCategory( id );
  }

  const handleRemoveCategory = ( id, order ) => {
    onRemoveCategory( id, order );
  }

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
        onSelectCategory={ handleSelectCategory }
        onRemoveCategory={ handleRemoveCategory }
        useDragHandle={ true }
        onSortEnd={ handleMoveCategory } />
      <AddCategory />
      <p>{ isFetching ? "Loading..." : "" }</p>
    </div>
  )
}

export default CategoryList;
