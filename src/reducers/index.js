import { combineReducers } from 'redux';

import categories from './categories';
import category from './category';
import pages from './pages';

const reducers = combineReducers({
  categories,
  category,
  pages
});

 export default reducers;