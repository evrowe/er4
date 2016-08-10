import $ from 'jquery';

export const ENTRIES_FETCH_STARTED = 'ENTRIES_FETCH_STARTED';
export const ENTRIES_FETCH_COMPLETED = 'ENTRIES_FETCH_COMPLETED';
export const ENTRIES_FETCH_FAILED = 'ENTRIES_FETCH_FAILED';

export function getEntries() {
  return dispatch => {
    dispatch({ type: ENTRIES_FETCH_STARTED }); // Signal that a loading action has started
    $.get('/service/entries').then(response => {
      dispatch({
        type: ENTRIES_FETCH_COMPLETED,
        entries: response.entries
      });
    }).fail(error => {
      dispatch({
        type: ENTRIES_FETCH_FAILED,
        error
      });
    });
  };
}

export const SINGLE_ENTRY_FETCH_COMPLETED = 'SINGLE_ENTRY_FETCH_COMPLETED';
export const SINGLE_ENTRY_FETCH_FAILED = 'SINGLE_ENTRY_FETCH_FAILED';

export function getEntry(slug) {
  return dispatch => {
    $.get(`/service/entries/${slug}`).then(entry => {
      dispatch({
        type: SINGLE_ENTRY_FETCH_COMPLETED,
        entry: $.parseJSON(entry)
      });
    }).fail(error => {
      dispatch({
        type: SINGLE_ENTRY_FETCH_FAILED,
        error
      });
    });
  };
}
