import * as types from '../constants/action_types';
import { arrayMove } from 'react-sortable-hoc';

const categories = (
  state = {
    isFetching: false,
    items: []
  }, action) => {
    let newItems = [];
    switch (action.type) {
      case types.MOVE_CATEGORY:
      return arrayMove( state, action.oldIndex, action.newIndex )
        .map((item, index) => {
          item.order = index;
          return item;
        });

        return {
          ...state,
          items: newItems
        }
      case types.MAKE_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case types.RECEIVE_CATEGORIES:
        return {
          isFetching: false,
          items: action.data
        }
      case types.RECEIVE_CATEGORY:
        return {
          isFetching: false,
          items: [
            ...state.items,
            action.data
          ]}
      case types.DELETE_CATEGORY:
        return {
          isFetching: false,
          items: state.items.filter( (item) => item.id !== action.id )
        }
      case types.UPDATE_CATEGORY:
        return {
          isFetching: false,
          items: state.items.map( (item) => item.id === action.data.id ? action.data : item )
        }
      case types.UPDATE_CATEGORIES:
        return {
          isFetching: false,
          items: state.items.map( (item) => action.data.hasOwnProperty( item.id ) ? action.data[item.id] : item )
        }
      default:
        return state;
    }
}

export default categories;
