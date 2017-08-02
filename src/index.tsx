import * as React from 'react';
import { render } from 'react-dom';

import CategoryList from './components/CategoryList';

const categories = [
  { title: "test category" },
  { title: "test category" },
  { title: "test category 2" }
]

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <CategoryList categories={categories} />
    )
  }
}

render(
  <App />,
  document.getElementById('app')
);