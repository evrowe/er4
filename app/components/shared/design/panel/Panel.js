import React, { PropTypes } from 'react';
import './panel.css';

Panel.propTypes = {
  children: PropTypes.node
};

export default function Panel(props) {
  return (
    <div className='panel'>{props.children}</div>
  );
}
