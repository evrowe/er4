import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './button.css';

Button.propTypes = {
  children: PropTypes.node,
  goto: PropTypes.string
};

export default function Button(props) {
  if (props.goto) {
    return(<Link to={props.goto} className='button'>{props.children}</Link>);
  } else {
    return(<button>{props.children}</button>);
  }
}
