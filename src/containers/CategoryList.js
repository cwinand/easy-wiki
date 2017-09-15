import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

import { formatForPutCategories } from '../utils/categories';
import { apiPostCategory, apiPutCategories, changeFormVisibility, moveCategory } from '../actions/categories';


const mapStateToProps = ( state ) => {
  const { byId, allIds, isFetching, selected, isFormShown } = state.categories

  return {
    categoriesById: byId,
    categoryIds: allIds,
    isFetching,
    selected,
    isFormShown
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onCreateCategory: ( title ) => {
      dispatch( apiPostCategory( title ) )
    },
    onChangeFormVisibility: ( status ) => {
      dispatch( changeFormVisibility( status ) )
    },
    onMoveCategory: ( categoriesById, categoryIds, oldIndex, newIndex ) => {
      const { ids, updates } = formatForPutCategories( categoriesById, categoryIds, oldIndex, newIndex )

      // Pass the original category ids to apiPutCategories in case we need to reset state on failure
      // Can refactor this to an 'undo' style feature
      dispatch( apiPutCategories( ids, updates, categoryIds ) );

      dispatch( moveCategory( { categoryIds, oldIndex, newIndex } ) )
    }
  }
}

const CategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)( CategoryListComponent );

export default CategoryList;
