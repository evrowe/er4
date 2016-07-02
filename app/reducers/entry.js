import {
  SINGLE_ENTRY_FETCH_COMPLETED,
  SINGLE_ENTRY_FETCH_FAILED
} from '../actions/journal';

function entry(state = {}, action) {
  switch(action.type) {
    case SINGLE_ENTRY_FETCH_COMPLETED:
      return action.entry;
    case SINGLE_ENTRY_FETCH_FAILED:
      return state;
    default:
      return state;
  }
}

export default entry;
