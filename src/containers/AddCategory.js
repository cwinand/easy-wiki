import { connect } from 'react-redux';

import AddCategoryComponent from '../components/AddCategory';
import { addCategory } from '../actions/categories';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategory: (title) => {
      dispatch( addCategory( title ) );
    }
  }
}


const AddCategory = connect(
  null,
  mapDispatchToProps
)(AddCategoryComponent);

export default AddCategory;
