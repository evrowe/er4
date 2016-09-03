import React, { PropTypes } from 'react';

PanelTitle.propTypes = {
  children: PropTypes.node
};

export default function PanelTitle(props) {
  return (
    <p className='panel-title'>{props.children}</p>
  );
}
