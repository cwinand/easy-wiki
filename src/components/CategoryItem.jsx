import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import classNames from 'classnames';

import PageList from './PageList'

const DragHandle = SortableHandle( () => <i className="fa fa-sort fa-fw"></i> )

const CategoryItem = SortableElement( ( { category, selected, onSelectCategory, onRemoveCategory, onSelectPage } ) => {
  const { title, order, id, pages } = category;

  const classes = classNames({
    'active': selected === id,
    'category-item': true
  })

  const handleSelectCategory = () => {
    onSelectCategory( id )
  }

  const handleRemoveCategory = () => {
    onRemoveCategory( id )
  }

  const handleSelectPage = ( id ) => {
    onSelectPage( id )
  }

  return(
    <li onClick={ handleSelectCategory } className={ classes }>
      <a href="#">{ title }, order: { order }, id: { id }</a>
      <div className="controls">
        <button onClick={ handleRemoveCategory }>Remove</button>
        <DragHandle />
      </div>
      <PageList pages={ pages } onSelectPage={ handleSelectPage }/>
    </li>
  );
});

export default CategoryItem;
