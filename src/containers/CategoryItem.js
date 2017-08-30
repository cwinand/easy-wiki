import { connect } from 'react-redux';
import CategoryItemComponent from '../components/CategoryItem';

import { selectCategory, apiDeleteCategory } from '../actions/categories';
import { changeFormVisibility, apiPutCategory } from '../actions/category'
import { apiGetPage } from '../actions/pages';

const mapStateToProps = ( state ) => {
  return {
    isFormShown: state.category.isFormShown
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onUpdateCategory: ( id, title ) => {
      dispatch( apiPutCategory( id, title ) )
    },
    onChangeFormVisibility: ( status ) => {
      dispatch( changeFormVisibility( status ) )
    },
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
