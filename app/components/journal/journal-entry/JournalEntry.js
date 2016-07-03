import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as journalActions from '../../../actions/journal';
import CSSModules from 'react-css-modules';
import moment from 'moment';

// CSS
import styles from './journal-entry.css';

// Setup for store
function mapStateToProps(state) {
  return {
    entry: state.entry
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(journalActions, dispatch);
}

class JournalEntry extends Component {

  // Property Validations + Defaults
  // ---------------------------------------------------------------------------

  static propTypes = {
    entry: PropTypes.object,
    getEntry: PropTypes.func
  }

  static defaultProps = {
    entry: {}
  }

  // Hooks
  // ---------------------------------------------------------------------------

  componentDidMount() {
    this.props.getEntry(this.props.params.entryId);
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    let { entry } = this.props;

    return(
      <article className='entry-full' data-test='journal-entry'>
        <div styleName='entry-header'>
          <img src={entry.headerImage} className='header-image' />
          <h1 styleName='header-title'>{entry.title}</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='column column-67 column-offset-16'>
              <div styleName='entry-date'>
                {moment(entry.created).format('MMMM D, YYYY')}
                { entry.updated ?
                  <span styleName='updated-date'>(Updated {moment(entry.updated).format('MMMM D, YYYY')})</span> : '' }
              </div>
              <div styleName='entry-content' data-test='content' dangerouslySetInnerHTML={{ __html: entry.content }} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(JournalEntry, styles));
