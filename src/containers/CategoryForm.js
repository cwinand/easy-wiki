import { connect } from 'react-redux';

import CategoryFormComponent from '../components/CategoryForm';
import { apiPostCategory } from '../actions/categories';

const mapStateToProps = ( state ) => {
  return {
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onSubmitForm: ( title ) => {
      dispatch( apiPostCategory( title ) );
    }
  }
}


const CategoryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)( CategoryFormComponent );

export default CategoryForm;
