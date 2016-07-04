import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import moment from 'moment';

import styles from './journal-entry-stub.css';

class JournalEntryStub extends Component {

  // Property Validations + Defaults
  // ---------------------------------------------------------------------------

  static propTypes = {
    entry: PropTypes.object
  }

  static defaultProps = {
    entry: {}
  }

  // Render
  // ---------------------------------------------------------------------------

  render() {
    const { entry } = this.props;

    return(
      <article styleName='entry-stub' className='entry-stub' data-test='journal-entry-stub'>
        <h3 styleName='entry-title' data-test='title'>
          <Link to={`/journal/entry/${entry.id}`}>{entry.title}</Link>
        </h3>
        <p styleName='entry-date-line'>
          {moment(entry.created).format('MMMM D, YYYY')}
          { entry.updated ?
            <span styleName='updated-date'>(Updated {moment(entry.updated).format('MMMM D, YYYY')})</span> : '' }
        </p>
        <div styleName='entry-excerpt' data-test='excerpt' dangerouslySetInnerHTML={{ __html: entry.excerpt }} />
      </article>
    );
  }
}

export default CSSModules(JournalEntryStub, styles);
