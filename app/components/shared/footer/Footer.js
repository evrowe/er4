import React, { Component } from 'react';

class Footer extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return(
      <footer className='bg-inverse'>
        <div className='container'>
          <div className='row'>
            <div className='column'>
              <img src='img/er-large.png' style={{ width: '100%' }} />
            </div>
            <div className='column'>
              <p>Built with <a href='//facebook.github.io' target='_blank'>React</a>.<br/>Source available on <a href='//www.github.com/evrowe/er4' target='_blank'>Github.</a></p>
              <p>Hosted on <a href='//www.digitalocean.com' target='_blank'>Digital Ocean</a> with continuous integration via <a href='//www.codeship.com' target='_blank'>Codeship</a></p>
              <p>&copy;2016 Evan Rowe</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
