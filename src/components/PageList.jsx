import React from 'react';

import PageListItem from './PageListItem';

const PageList = ( { pageIds, pagesById, onSelectPage } ) => {

  const handleSelectPage = ( id ) => {
    onSelectPage( id )
  }

  return(
    <div className='pages-list-container'>
    <p>Pages:</p>
    { pageIds.length > 0 ? '' : 'This category has no pages' }
    <ul className='pages-list'>
      { pageIds.map( ( pageId, index ) => (
        <PageListItem key={ pageId } id={ pageId } pageData={ pagesById[ pageId ] } onSelectPage={ handleSelectPage } />
      )
      ) }
    </ul>
    </div>
  )
}

export default PageList
