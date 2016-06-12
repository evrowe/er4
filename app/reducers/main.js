import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Reducers
import entries from './entries';

const rootReducer = combineReducers({
  entries,
  routing
});

export default rootReducer;
