import { connect } from 'react-redux';
import CategoryItemComponent from '../components/CategoryItem';

import { selectCategory, changeEditVisibility, apiPutCategory, apiDeleteCategory } from '../actions/categories';
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
    onRemoveCategory: ( id ) => {
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
