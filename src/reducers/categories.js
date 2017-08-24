import * as types from '../constants/action_types';

const initialState = {
  isFetching: false,
  selected: undefined,
  items: []
}

const categories = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.SELECT_CATEGORY:
      return {
        ...state,
        selected: action.id
      }
    case types.CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data
      }
    case types.POST_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: [
          ...state.items,
          action.data
        ]}
    case types.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.filter( ( item ) => item.id !== action.id )
      }
    case types.PUT_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.map( ( item ) => item.id === action.data.id ? action.data : item )
      }
    case types.PUT_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.map( ( item ) => action.data.hasOwnProperty( item.id ) ? action.data[ item.id ] : item )
      }
    default:
      return state;
  }
}

export default categories;
