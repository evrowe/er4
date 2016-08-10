import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Reducers
import entry from './entry';
import entries from './entries';
import entriesAreLoading from './entriesAreLoading';

const rootReducer = combineReducers({
  entry,
  entries,
  entriesAreLoading,
  routing
});

export default rootReducer;
