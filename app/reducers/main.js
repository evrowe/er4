import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Reducers
import entry from './entry';
import entries from './entries';

const rootReducer = combineReducers({
  entry,
  entries,
  routing
});

export default rootReducer;
