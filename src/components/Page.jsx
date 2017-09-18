import React from 'react';
import marked from 'marked';

import PageForm from './PageForm'

const Page = ( { page } ) => {

  marked.setOptions({
    sanitize: true
  })

  return(
    <div className="main">
      { page &&
        <h1>{ page.title }</h1>
        /*{ page.sections.map( ( section, index ) => (

          <section key={ section.id }>
            <div className="output">
              <h2>{ section.title }</h2>
              <div dangerouslySetInnerHTML={ { __html: marked(section.text) } }></div>
            </div>
            <div className="input">
              <PageForm section={ section } />
            </div>
          </section>
        ))} */
      }
    </div>
  )
}

export default Page
