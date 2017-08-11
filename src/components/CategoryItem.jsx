import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const CategoryItem = SortableElement(({ category, onRemoveCategory }) => {
  const { title, order, id } = category;

  const handleRemoveCategory = () => {
    onRemoveCategory(id);
  }

  return(
    <li>{title}, order: {order}, id: {id}
      <button onClick={handleRemoveCategory}>Remove</button>
    </li>
  );
});

export default CategoryItem;
