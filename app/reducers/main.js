import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Reducers
import entry from './entry';
import entryListModel from './entryListModel';

const rootReducer = combineReducers({
  entry,
  entryListModel,
  routing
});

export default rootReducer;
