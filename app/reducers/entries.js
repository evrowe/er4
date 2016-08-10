import {
  ENTRIES_FETCH_COMPLETED,
  ENTRIES_FETCH_FAILED
} from '../actions/journal';

export default function entries(state = [], action) {
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
