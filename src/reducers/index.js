import { combineReducers } from 'redux';
import { addCategory, removeCategory, CategoriesAction } from '../actions/CategoriesActions';

const categories = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        {
          title: action.title,
          id: action.id,
          order: state.length
        }
      ]
    case 'REMOVE_CATEGORY':
      return state.filter( (item) => {
        return item.id !== action.id
      }).map((item, index) => {
          if ( item.order !== index ) {
            return {
              ...item,
              order: index
            }
          } else {
            return item
          }
        })
    default:
      return state;
  }
}

const reducers = combineReducers({
  categories
});

 export default reducers;