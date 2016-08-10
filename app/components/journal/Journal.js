import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as journalActions from '../../actions/journal';

// Setup for store
function mapStateToProps(state) {
  return {
    entries: state.entries,
    entriesAreLoading: state.entriesAreLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(journalActions, dispatch);
}

class Journal extends Component {

  // Property Validations + Defaults
  // ---------------------------------------------------------------------------

  static propTypes = {
    entries: PropTypes.array,
    getEntries: PropTypes.func,
    entriesAreLoading: PropTypes.bool
  }

  static defaultProps = {
    entries: [],
    entriesAreLoading: false
  }


  // Hooks
  // ---------------------------------------------------------------------------

  componentWillMount() {
    this.props.getEntries();
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    return (
      <div className='journal-top'>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal);
