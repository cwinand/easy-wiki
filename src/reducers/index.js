import { combineReducers } from 'redux';

import categories from './categories';
import pages from './pages';
import sections from './sections';

const reducers = combineReducers({
  categories,
  pages,
  sections
});

 export default reducers;