import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as journalActions from '../../actions/journal';

// Setup for store
function mapStateToProps(state) {
  return {
    entryListModel: state.entryListModel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(journalActions, dispatch);
}

/**
 * The master component for the `/journal` route. This guy takes care of fetching
 * the `entryListModel` from the server and passes that state into its children,
 * which only the `JournalList` component really cares about.
 *
 * @class Component.Journal
 * @constructor
 * @extends React.Component
 */
class Journal extends Component {

  // Property Validations + Defaults
  // ---------------------------------------------------------------------------

  static propTypes = {
    entryListModel: PropTypes.object,
    getEntries: PropTypes.func
  }

  static defaultProps = {
    entryListModel: {
      entries: [],
      isLoading: false
    }
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
