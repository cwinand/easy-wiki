import React from 'react';

const PageListItem = ( { id, title, onSelectPage } ) => {

  const handleSelectPage = () => {
    onSelectPage( id )
  }

  return(
    <li key={ id }>
      <a href='#' onClick={ handleSelectPage }>{ title }</a>
    </li>
  )
}

export default PageListItem
