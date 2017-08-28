import React from 'react';

import PageListItem from './PageListItem';

const PageList = ( { pages, onSelectPage } ) => {

  const handleSelectPage = ( id ) => {
    onSelectPage( id )
  }

  return(
    <div className='pages-list-container'>
    <p>Pages:</p>
    { pages.length > 0 ? '' : 'This category has no pages' }
    <ul className='pages-list'>
      { pages.map( ( page, index ) => (
        <PageListItem key={ page.id } id={ page.id } title={ page.title } onSelectPage={ handleSelectPage } />
      )
      ) }
    </ul>
    </div>
  )
}

export default PageList
