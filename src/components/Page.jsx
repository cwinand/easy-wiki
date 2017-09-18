import React from 'react';

import Section from './Section'

const Page = ( { page, sectionsById, isFetching } ) => {

  const render = () => {
    if ( isFetching ) {
      return ( <p>Loading...</p> )
    } else if ( !page ) {
      return ( <p>No page selected</p> )
    } else {
      return (
        <div className="main">
          <h1>{ page.title }</h1>
          { page.sections.map( ( sectionId, index ) => <Section section={ sectionsById[ sectionId ] } /> ) }
        </div>
      )
    }
  }


  return render()

}

export default Page
