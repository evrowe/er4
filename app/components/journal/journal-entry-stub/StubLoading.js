import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './journal-entry-stub.css';

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
