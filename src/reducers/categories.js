import * as types from '../constants/action_types';

const initialState = {
  isFetching: false,
  items: []
}

const categories = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.GET_CATEGORIES_SUCCESS:
      return {
        isFetching: false,
        items: action.data
      }
    case types.POST_CATEGORY_SUCCESS:
      return {
        isFetching: false,
        items: [
          ...state.items,
          action.data
        ]}
    case types.DELETE_CATEGORY_SUCCESS:
      return {
        isFetching: false,
        items: state.items.filter( ( item ) => item.id !== action.id )
      }
    case types.PUT_CATEGORY_SUCCESS:
      return {
        isFetching: false,
        items: state.items.map( ( item ) => item.id === action.data.id ? action.data : item )
      }
    case types.PUT_CATEGORIES_SUCCESS:
      return {
        isFetching: false,
        items: state.items.map( ( item ) => action.data.hasOwnProperty( item.id ) ? action.data[ item.id ] : item )
      }
    default:
      return state;
  }
}

export default categories;
