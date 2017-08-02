import * as React from 'react';

interface CategoryProps {
  title: string;
}

export default class CategoryItem extends React.Component<CategoryProps, any> {
  constructor( props: CategoryProps ) {
    super( props );
  }

  render() {
    return(
      <p>{this.props.title}</p>
    )
  }
}
