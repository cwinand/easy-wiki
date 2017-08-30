import { connect } from 'react-redux';

import CategoryFormComponent from '../components/CategoryForm';
import { apiPostCategory, changeFormVisibility } from '../actions/categories';

const mapStateToProps = ( state ) => {
  return {
    isFormShown: state.categories.isFormShown,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onSubmitForm: ( title ) => {
      dispatch( apiPostCategory( title ) );
    },
    onChangeFormVisibility: ( status ) => {
      dispatch( changeFormVisibility( status ) )
    }
  }
}


const CategoryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)( CategoryFormComponent );

export default CategoryForm;
