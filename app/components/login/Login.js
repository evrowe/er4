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
            <h3>Sign in with GitHub</h3>
            <button onClick={this.handleLogIn}>Do It</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Login, styles);
