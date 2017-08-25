import { connect } from 'react-redux';

import AddCategoryComponent from '../components/AddCategory';
import { apiPostCategory, changeFormVisibility } from '../actions/categories';

const mapStateToProps = ( state ) => {
  return {
    isFormShown: state.categories.isFormShown,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onAddCategory: ( title ) => {
      dispatch( apiPostCategory( title ) );
    },
    onChangeFormVisibility: ( status ) => {
      dispatch( changeFormVisibility( status ) )
    }
  }
}


const AddCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)( AddCategoryComponent );

export default AddCategory;
