import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

import { removeCategory, moveCategory } from '../actions/CategoriesActions';

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveCategory: (id, order) => {
      dispatch( removeCategory(id, order) );
    },
    onMoveCategory: (oldIndex, newIndex) => {
      dispatch( moveCategory(oldIndex, newIndex) );
    }
  }
}

const CategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListComponent);

export default CategoryList;
