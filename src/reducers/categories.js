import { CategoriesAction } from '../actions/categories';
import { arrayMove } from 'react-sortable-hoc';

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
    case 'MOVE_CATEGORY':
      return arrayMove( state, action.oldIndex, action.newIndex )
        .map((item, index) => {
          item.order = index;
          return item;
        });
    default:
      return state;
  }
}

export default categories;
