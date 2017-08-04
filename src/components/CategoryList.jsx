import React from 'react';

import CategoryItem from './CategoryItem'
import AddCategory from '../containers/AddCategory'

const CategoryList = ({ categories, onRemoveCategory }) => {

  const handleRemoveCategory = (id, order) => {
    onRemoveCategory(id, order);
  }

  return(
    <ol>
      { categories.map( (category ) => (
        <CategoryItem key={category.id} category={category} onRemoveCategory={handleRemoveCategory} />
      )
      )}
      <li><AddCategory /></li>
    </ol>
  );
}

export default CategoryList;
