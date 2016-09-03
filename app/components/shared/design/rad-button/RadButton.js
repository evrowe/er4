import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './rad-button.css';

RadButton.propTypes = {
  children: PropTypes.node,
  goto: PropTypes.string
};

export default function RadButton(props) {
  if (props.goto) {
    return(<Link to={props.goto} className='button'>{props.children}</Link>);
  } else {
    return(<button>{props.children}</button>);
  }
}
