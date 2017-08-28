import React from 'react';

import CategoryList from '../containers/CategoryList';
import Page from '../containers/Page';

const App = () => {
  return(
    <div className='container'>
      <CategoryList />
      <Page />
    </div>
  )
}

export default App;
