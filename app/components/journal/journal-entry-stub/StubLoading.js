import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './journal-entry-stub.css';

/**
 * A non-interactive display component responsible for both providing placeholders
 * for journal entries that have not yet loaded in, and indicating to the user
 * that a loading operation is in progress.
 *
 * @class Component.Journal.JournalEntryStub.StubLoading
 * @constructor
 * @extends React.Component
 */
class StubLoading extends Component {
  render() {
    return (
      <article styleName='entry-stub' data-test='journal-entry-stub-loading'>
        <div styleName='entry-image-placeholder loading-anim'/>
        <div styleName='title-placeholder loading-anim'/>
        <div styleName='date-placeholder loading-anim'/>
        <div styleName='excerpt-placeholder loading-anim'/>
      </article>
    );
  }
}

export default CSSModules(StubLoading, styles, { allowMultiple: true });
