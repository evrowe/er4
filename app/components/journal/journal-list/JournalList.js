import React, { Component, PropTypes } from 'react';

import JournalEntryStub from '../journal-entry-stub/JournalEntryStub';

class JournalList extends Component {

  // Property Validations + Defaults
  // ---------------------------------------------------------------------------

  static propTypes = {
    entries: PropTypes.array
  }

  static defaultProps = {
    entries: []
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    return(
      <div className='container main-content'>
        <div className='row'>
          <div className='column column-67 column-offset-16'>
            <h2>Entries</h2>
            <div className='journal-list'>
              {this.props.entries.length ?
                this.props.entries.map((entry, index) => <JournalEntryStub {...this.props} key={index} i={index} entry={entry} />) :
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
