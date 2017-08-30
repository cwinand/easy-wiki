import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

import { normalizeForPutCategories } from '../utils/categories';
import { apiPutCategories, changeFormVisibility } from '../actions/categories';


const mapStateToProps = ( state ) => {
  const { items, isFetching, selected, isFormShown } = state.categories

  return {
    categories: items.sort( ( a, b ) => a.order - b.order ),
    isFetching,
    selected,
    isFormShown
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onChangeFormVisibility: ( status ) => {
      dispatch( changeFormVisibility( status ) )
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
