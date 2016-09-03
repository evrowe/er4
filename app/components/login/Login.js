import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './login.css';

import Authentication from '../../utils/authentication.js';

class Login extends Component {

  // Handle the login request or something.
  handleLogIn() {
    Authentication.doLogin();
  }

  render() {
    return(
      <div className='container main-content'>
        <div className='row'>
          <div className='column column-67 column-offset-16'>
            <h3>Sign In</h3>
            <a href='/service/auth/login' className='button'>Bring Me That Dang Trumpet, Bugle Boy!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Login, styles);
