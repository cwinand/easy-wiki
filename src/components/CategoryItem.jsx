import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle( () => <span>:::</span> )

const CategoryItem = SortableElement( ( { category, selected, onSelectCategory, onRemoveCategory } ) => {
  const { title, order, id } = category;

  const handleSelectCategory = () => {
    onSelectCategory( id )
  }

  const handleRemoveCategory = () => {
    onRemoveCategory( id );
  }

  const selectedStyle = () => {
    const border = selected === id ? '1px solid red':'none';
    return { border }
  }

  return(
    <li onClick={ handleSelectCategory } style={selectedStyle()}>{ title }, order: { order }, id: { id }
      <button onClick={ handleRemoveCategory }>Remove</button>
      <DragHandle />
    </li>
  );
});

export default CategoryItem;
