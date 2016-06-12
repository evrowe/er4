import React, { Component, PropTypes } from 'react';

class JournalEntry extends Component {

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
      <article className='entry-full' data-test='journal-entry'>
        <h2 data-test='title'>{entry.title}</h2>
        <div data-test='content'>{entry.content}</div>
      </article>
    );
  }
}

export default JournalEntry;
