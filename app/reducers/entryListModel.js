import {
  ENTRIES_FETCH_STARTED,
  ENTRIES_FETCH_COMPLETED,
  ENTRIES_FETCH_FAILED
} from '../actions/journal';

const initialState = {
  entries: [],
  isLoading: false
};

/**
 * Reducer for handling updates to the state of the `entries` property on the
 * `entryListModel` state. Observes dispatched actions and updates only the
 * list of entries.
 *
 * @method entries
 * @param {Array} state The current/default state of the entries list
 * @param {Object} action The action dispatched to the reducer
 * @return {Array}
 */
function entries(state = [], action) {
  switch(action.type) {
    case ENTRIES_FETCH_COMPLETED:
      return action.entries;
    case ENTRIES_FETCH_FAILED:
      console.log('fetching journal entries failed');
      return state;
    default:
      return state;
  }
}

/**
 * Reducer for handling updates to the state of the `isLoading` property on the
 * `entryListModel` state. Observes dispatched actions and updates only the
 * loading state.
 *
 * @method isLoading
 * @param {Boolean} state The current/default state of loading status
 * @param {Object} action The action dispatched to the reducer
 * @return {Boolean}
 */
function isLoading(state = false, action) {
  switch(action.type) {
    case ENTRIES_FETCH_STARTED:
      return true;
    case ENTRIES_FETCH_COMPLETED:
      return false;
    case ENTRIES_FETCH_FAILED:
      return false;
    default:
      return state;
  }
}

/**
 * The reducer for the entire `entryListModel` state. Composes the two smaller
 * reducer functions that are responsible for making up the constituent portions
 * of the entire state reducer.
 *
 * @method entryListModel
 * @param {Object} state The current/default state provided to the reducer from the store
 * @param {Object} action The action dispatched to the reducer
 * @return {Object}
 */
export default function entryListModel(state = initialState, action) {
  return {
    isLoading: isLoading(state.isLoading, action),
    entries: entries(state.entries, action)
  };
}
