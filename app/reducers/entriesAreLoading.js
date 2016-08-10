import {
  ENTRIES_FETCH_STARTED,
  ENTRIES_FETCH_COMPLETED,
  ENTRIES_FETCH_FAILED
} from '../actions/journal';

/**
 * @NOTE
 * It feels weird having a separate reducer specifically for updating this loading
 * property. I think I need to update the way the UI tracks/handles the "model"
 * so that the loading state is part of the overall model, and the list of entries
 * is just another property on that model as well. This is a more scalable approach
 * that will allow me to keep all state updates for a single route contained within
 * one reducer file. This pattern of one reducer per state property is going to
 * get real ugly real fast.
 */

export default function entriesAreLoading(state = false, action) {
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
