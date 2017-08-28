import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

import { normalizeForPutCategories } from '../utils/categories';
import { selectCategory, apiDeleteCategory, apiPutCategories } from '../actions/categories';

import { apiGetPage } from '../actions/pages';

const mapStateToProps = ( state ) => {
  return {
    categories: state.categories.items.sort( ( a, b ) => a.order - b.order ),
    isFetching: state.categories.isFetching,
    selected: state.categories.selected
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onSelectCategory: ( id ) => {
      dispatch( selectCategory( id ) );
    },
    onRemoveCategory: ( id, order ) => {
      dispatch( apiDeleteCategory( id, order ) );
    },
    onMoveCategory: ( oldIndex, newIndex, categories ) => {
      const { ids, updates } = normalizeForPutCategories( categories, oldIndex, newIndex  );
      dispatch( apiPutCategories( ids, updates ) );
    },
    onSelectPage: ( id ) => {
      dispatch( apiGetPage( id ) )
    }
  }
}

const CategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)( CategoryListComponent );

export default CategoryList;
