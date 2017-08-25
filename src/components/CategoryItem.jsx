import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import classNames from 'classnames';

const DragHandle = SortableHandle( () => <i className="fa fa-sort fa-fw"></i> )

const CategoryItem = SortableElement( ( { category, selected, onSelectCategory, onRemoveCategory } ) => {
  const { title, order, id } = category;

  const classes = classNames({
    'active': selected === id,
    'category-item': true
  })

  const handleSelectCategory = () => {
    onSelectCategory( id )
  }

  const handleRemoveCategory = () => {
    onRemoveCategory( id );
  }

  return(
    <li onClick={ handleSelectCategory } className={ classes }>
      <a href="#">{ title }, order: { order }, id: { id }</a>
      <div className="controls">
        <button onClick={ handleRemoveCategory }>Remove</button>
        <DragHandle />
      </div>
    </li>
  );
});

export default CategoryItem;
