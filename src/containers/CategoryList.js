import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

import { normalizeForPutCategories } from '../utils/categories';
import { apiPutCategories } from '../actions/categories';


const mapStateToProps = ( state ) => {
  return {
    categories: state.categories.items.sort( ( a, b ) => a.order - b.order ),
    isFetching: state.categories.isFetching,
    selected: state.categories.selected
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onMoveCategory: ( oldIndex, newIndex, categories ) => {
      const { ids, updates } = normalizeForPutCategories( categories, oldIndex, newIndex  );
      dispatch( apiPutCategories( ids, updates ) );
    }
  }
}

const CategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)( CategoryListComponent );

export default CategoryList;
