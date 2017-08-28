import React from 'react';

const Page = ({ data }) => {

  return(
    <div className="main">
      <h1>{ data.title }</h1>
      { data.sections.map( ( section, index ) => (
        <section key={ section.id }>
          <h2>{ section.title }</h2>
          <div>{ section.text }</div>
        </section>
      ))}
    </div>
  )
}

export default Page
