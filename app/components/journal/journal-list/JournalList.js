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
      <div className='journal-list'>
        {this.props.entries.length ?
          this.props.entries.map((entry, index) => <JournalEntryStub {...this.props} key={index} i={index} entry={entry} />) :
          <h3>No Entries Found.</h3>
        }
      </div>
    );
  }
}

export default JournalList;
