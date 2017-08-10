import { connect } from 'react-redux';

import AddCategoryComponent from '../components/AddCategory';
import { apiPostCategory } from '../actions/categories';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategory: (title) => {
      dispatch( apiPostCategory( title ) );
    }
  }
}


const AddCategory = connect(
  null,
  mapDispatchToProps
)(AddCategoryComponent);

export default AddCategory;
