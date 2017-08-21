import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

import { apiDeleteCategory, apiPutCategories } from '../actions/categories';

const mapStateToProps = (state) => {
  return {
    categories: state.categories.items.sort( (a, b) => a.order - b.order )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveCategory: (id, order) => {
      dispatch( apiDeleteCategory(id) );
    },
    onMoveCategory: (oldIndex, newIndex, categories) => {
      dispatch( apiPutCategories(categories, oldIndex, newIndex) );
    }
  }
}

const CategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListComponent);

export default CategoryList;
