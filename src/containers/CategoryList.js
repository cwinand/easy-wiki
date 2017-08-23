import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

import { normalizeForPutCategories } from '../utils/categories';
import { apiDeleteCategory, apiPutCategories } from '../actions/categories';

const mapStateToProps = ( state ) => {
  return {
    categories: state.categories.items.sort( ( a, b ) => a.order - b.order )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onRemoveCategory: ( id, order ) => {
      dispatch( apiDeleteCategory( id, order ) );
    },
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
