import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import classNames from 'classnames';

import PageList from './PageList'

const DragHandle = SortableHandle( () => <i className="fa fa-sort fa-fw"></i> )

const CategoryItem = SortableElement( ( { category, ...rest} ) => {
  const { title, order, id, pages } = category
  const { selected } = rest
  const { onSelectCategory, onRemoveCategory, onSelectPage } = rest

  const classes = classNames({
    'active': selected === id,
    'category-item': true
  })

  const handleEditCategory = () => {}
  const handleSelectCategory = () => onSelectCategory( id )
  const handleRemoveCategory = () => onRemoveCategory( id )
  const handleSelectPage = ( id ) => onSelectPage( id )

  return(
    <li onClick={ handleSelectCategory } className={ classes }>
      <a href="#">{ title }</a>
      <DragHandle />
      <div className="expanded-items">
        <div className="controls">
          <button onClick={ handleEditCategory }><i className="fa fa-pencil"></i> Edit Category</button>
          <button onClick={ handleRemoveCategory }><i className="fa fa-minus"></i> Remove Category</button>
        </div>
        <PageList pages={ pages } onSelectPage={ handleSelectPage }/>
      </div>
    </li>
  );
});

export default CategoryItem;
