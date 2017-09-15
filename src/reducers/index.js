import { combineReducers } from 'redux';

import categories from './categories';
import pages from './pages';

const reducers = combineReducers({
  categories,
  pages
});

 export default reducers;