import React from 'react';

import CategoryItem from './CategoryItem'
import AddCategory from '../containers/AddCategory'

const CategoryList = ({ categories }) => {
  return(
    <ol>
      { categories.map( (category, index ) => (
        <CategoryItem key={index} order={category.order} title={category.title} />
      )
      )}
      <li><AddCategory /></li>
    </ol>
  );
}

export default CategoryList;
