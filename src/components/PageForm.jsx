import React from 'react'

const PageForm = ( { section } ) => {
  const { id, title, text } = section

  const handleHideForm = ( e ) => {
    e.preventDefault()
    e.target.parentElement.parentElement.reset()
  }

  return(
    <form>
      <input type="text" name="title" defaultValue={ title } />
      <textarea id="" name="text" cols="30" rows="10" defaultValue={ text }></textarea>
      <div className="controls">
        <input type="submit" />
        <button onClick={ handleHideForm }>Cancel</button>
      </div>
    </form>
  )
}

export default PageForm
