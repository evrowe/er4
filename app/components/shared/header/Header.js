import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import styles from './header.css';

class Header extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return (
      <nav styleName='navbar'>
        <Link to='/' className=''>
          <img src='/img/er-mark-full.png' width='35'/>
        </Link>
        <ul styleName='navbar-nav'>
          <li styleName='nav-item'>
            <Link to='/journal' className='nav-link'>Journal</Link>
          </li>
          <li styleName='nav-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li styleName='nav-item'>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default CSSModules(Header, styles);
