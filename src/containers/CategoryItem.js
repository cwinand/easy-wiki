import { connect } from 'react-redux';
import CategoryItemComponent from '../components/CategoryItem';

import { selectCategory, apiDeleteCategory } from '../actions/categories';
import { apiGetPage } from '../actions/pages';

const mapStateToProps = ( state ) => {
  return {
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onSelectCategory: ( id ) => {
      dispatch( selectCategory( id ) );
    },
    onRemoveCategory: ( id, order ) => {
      dispatch( apiDeleteCategory( id ) );
    },
    onSelectPage: ( id ) => {
      dispatch( apiGetPage( id ) )
    }
  }
}

const CategoryItem = connect(
  mapStateToProps,
  mapDispatchToProps
)( CategoryItemComponent );

export default CategoryItem;
