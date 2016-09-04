import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './rad-button.css';

RadButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  goto: PropTypes.string,
  onClick: PropTypes.func
};

export default function RadButton(props) {
  if (props.goto) {
    return(<Link to={props.goto} className={`button ${props.className}`}>{props.children}</Link>);
  } else {
    return(<button onClick={props.onClick} className={props.className}>{props.children}</button>);
  }
}
