import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as journalActions from '../../actions/journal';

// Components
import JournalList from './journal-list/JournalList';

// Setup for store
function mapStateToProps(state) {
  return {
    entries: state.entries
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(journalActions, dispatch);
}

class Journal extends Component {

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
    return (
      <div className='container'>
        <div className='column'>
          <h2>Yo it's journal time</h2>
          <JournalList {...this.props} entries={this.props.entries} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal);
