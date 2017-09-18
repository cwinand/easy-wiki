import React from 'react';

const PageListItem = ( { id, pageData, onSelectPage } ) => {

  const handleSelectPage = () => {
    onSelectPage( id )
  }

  return(
    <li key={ id }>
      <a href='#' onClick={ handleSelectPage }>{ pageData.title }</a>
    </li>
  )
}

export default PageListItem
