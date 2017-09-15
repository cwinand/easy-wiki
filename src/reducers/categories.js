import { combineReducers } from 'redux'
import { arrayMove } from 'react-sortable-hoc'

import * as types from '../constants/categories_types'
import { removeFromObject } from '../utils/immutable'

const categoriesById = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.GET_CATEGORIES_SUCCESS:
      return action.data.entities.categories

    case types.POST_CATEGORY_SUCCESS:
      const id = action.data.result
      return {
        ...state,
        [ id ]: action.data.entities.categories[ id ]
      }

    case types.DELETE_CATEGORY_SUCCESS:
      return removeFromObject( state, action.id )

    case types.PUT_CATEGORIES_SUCCESS:
      return Object.assign( {}, state, action.data.entities.categories )

    default:
      return state
  }
}

const allCategories = ( state = [], action ) => {
  switch ( action.type ) {
    case types.GET_CATEGORIES_SUCCESS:
      return action.data.result

    case types.POST_CATEGORY_SUCCESS:
      return [ ...state, action.data.result ]

    case types.DELETE_CATEGORY_SUCCESS:
      return state.filter( ( id ) => id !== action.id )

    case types.MOVE_CATEGORY:
      return arrayMove( action.data.categoryIds, action.data.oldIndex, action.data.newIndex )

    case types.PUT_CATEGORIES_FAILURE:
      return action.previousCategoryIds

    default:
      return state
  }
}

const selectedCategory = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.SELECT_CATEGORY:
      return {
        ...state,
        id: action.id
      }

    case types.CHANGE_EDIT_VISIBILITY:
      return {
        ...state,
        isFormShown: action.status
      }

    default:
      return state
  }
}

const newCategoryFormVisibility = ( state = false, action ) => {
  switch ( action.type ) {
    case types.CHANGE_NEW_VISIBILITY:
      return action.status

    default:
      return state
  }
}

const categoriesFetching = ( state = false, action ) => {
  switch ( action.type ) {
    case types.CATEGORIES_REQUEST_STATUS:
      return action.status

    default:
      return state
  }
}

const categories = combineReducers({
  byId: categoriesById,
  allIds: allCategories,
  selectedCategory: selectedCategory,
  isFormShown: newCategoryFormVisibility,
  isFetching: categoriesFetching
})


// const categories = ( state = initialState, action ) => {
//   switch ( action.type ) {
//     case types.PUT_CATEGORY_SUCCESS:
//       return {
//         ...state,
//         isFetching: false,
//         items: state.items.map( ( item ) => item.id === action.data.id ? action.data : item )
//       }
//   }
// }

export default categories
