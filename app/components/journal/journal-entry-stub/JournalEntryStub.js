import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
      <article className='entry-stub' data-test='journal-entry-stub'>
        <h3 data-test='title'>
          <Link to={`/journal/entry/${entry.id}`}>{entry.title}</Link>
        </h3>
        <div data-test='excerpt' dangerouslySetInnerHTML={{ __html: entry.excerpt }} />
      </article>
    );
  }
}

export default JournalEntryStub;
