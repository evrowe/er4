import React, { Component, PropTypes } from 'react';

import JournalEntryStub from '../journal-entry-stub/JournalEntryStub';
import StubLoading from '../journal-entry-stub/StubLoading';

/**
 * Displays a list of journal entries on the `/journal` route. Receives its
 * model from the state of the `Journal` component. Reacts to the `isLoading`
 * and `entries` portions of the model to either display the loading stubs or
 * journal entry stubs for each entry, once the entries list has been retrieved.
 *
 * @class Component.Journal.JournalList
 * @constructor
 * @extends React.Component
 */
class JournalList extends Component {

  // Property Validations + Defaults
  // ---------------------------------------------------------------------------

  static propTypes = {
    entryListModel: PropTypes.object
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    const { isLoading, entries } = this.props.entryListModel;
    return(
      <div className='container main-content'>
        <div className='row'>
          <div className='column column-67 column-offset-16'>
            <h2>Entries</h2>
            <div className='journal-list'>
              {isLoading ? <div><StubLoading/><StubLoading/></div> : ''}
              {!isLoading && entries.length ?
                entries.map((entry, index) => <JournalEntryStub {...this.props} key={index} i={index} entry={entry} />) :
                <p>No Entries Found.</p>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JournalList;
