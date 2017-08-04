import React from 'react';

const CategoryItem = ({ category, onRemoveCategory }) => {
  const { title, order, id } = category;

  const handleRemoveCategory = () => {
    onRemoveCategory(id, order);
  }

  return(
    <li>{title}, order: {order}, id: {id}
      <button onClick={handleRemoveCategory}>Remove</button>
    </li>
  );
}

export default CategoryItem;
