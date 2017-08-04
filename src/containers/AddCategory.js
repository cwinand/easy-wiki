import { connect } from 'react-redux';

import AddCategoryComponent from '../components/AddCategory';
import { addCategory } from '../actions/CategoriesActions';

const mapDispatchToProps = () => {
  return {}
}


const AddCategory = connect(
  null,
  mapDispatchToProps
)(AddCategoryComponent);

export default AddCategory;
