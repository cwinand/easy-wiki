import React from 'react';
import marked from 'marked';

import PageForm from './PageForm'

const Section = ( { section } ) => {

  marked.setOptions({
    sanitize: true
  })

  return(
    <section key={ section.id }>
      <div className="output">
        <h2>{ section.title }</h2>
        <div dangerouslySetInnerHTML={ { __html: marked(section.text) } }></div>
      </div>
      <div className="input">
        <PageForm section={ section } />
      </div>
    </section>
  )
}

export default Section