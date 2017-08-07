import React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import CategoryItem from './CategoryItem'
import AddCategory from '../containers/AddCategory'

const SortableCategoryList = SortableContainer(({ categories, onRemoveCategory }) => {

  const handleRemoveCategory = (id, order) => {
    onRemoveCategory(id, order);
  }

  return(
    <ol>
      { categories.map( (category, index ) => (
        <CategoryItem
          key={category.id}
          index={index}
          category={category}
          onRemoveCategory={handleRemoveCategory} />
      )
      )}
    </ol>
  );
});

const CategoryList = SortableContainer(({ categories, onRemoveCategory, onMoveCategory }) => {

  const handleRemoveCategory = (id, order) => {
    onRemoveCategory(id, order);
  }

  const handleMoveCategory = ({oldIndex, newIndex}) => {
    onMoveCategory(oldIndex, newIndex)
  }

  return(
    <div>
      <SortableCategoryList categories={categories} onRemoveCategory={handleRemoveCategory} onSortEnd={handleMoveCategory} />
      <AddCategory />
    </div>
  );
});

export default CategoryList;
