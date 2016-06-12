import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return (
      <nav className='navbar navbar-dark bg-primary navbar-static-top'>
        <Link to='/' className='navbar-brand'>
          <img src='img/er-mark-full.png' width='35'/>
        </Link>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link to='/journal' className='nav-link'>Journal</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
