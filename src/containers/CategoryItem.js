import { connect } from 'react-redux';
import CategoryItemComponent from '../components/CategoryItem';

import { selectCategory, changeEditVisibility, apiDeleteCategory } from '../actions/categories';

import { apiPutCategory } from '../actions/category'
import { apiGetPage } from '../actions/pages';

const mapStateToProps = ( state ) => {
  return {}
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onUpdateCategory: ( id, title ) => {
      dispatch( apiPutCategory( id, title ) )
    },
    onChangeEditVisibility: ( status ) => {
      dispatch( changeEditVisibility( status ) )
    },
    onSelectCategory: ( id ) => {
      dispatch( selectCategory( id ) );
      dispatch( changeEditVisibility( false ) )
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
