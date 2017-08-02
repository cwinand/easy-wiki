import * as React from 'react';

import CategoryItem from './CategoryItem'

interface CategoryProps {
  title: string;
}

export default class CategoryList extends React.Component<any, any> {
  constructor( props: any ) {
    super( props );
  }

  render() {
    return(
      <div>
        { this.props.categories.map( (category: CategoryProps) => <CategoryItem title={category.title} /> )}
      </div>
    );
  }
}
