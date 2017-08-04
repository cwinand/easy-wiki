import { combineReducers } from 'redux';
import { addCategory, removeCategory, CategoriesAction } from '../actions/CategoriesActions';

const categories = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        {
          title: action.title,
          order: state.length
        }
      ]
    case 'REMOVE_CATEGORY':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}

const reducers = combineReducers({
  categories
});

 export default reducers;