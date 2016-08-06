import React, { Component } from 'react';

class Footer extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return(
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='column column-25'>
              <img src='/img/er-large.png' style={{ width: '100%' }} />
            </div>
            <div className='column column-25 column-offset-50'>
              <p>
                Built with <a href='//facebook.github.io' target='_blank'>React</a><br/>
                Source available on <a href='//www.github.com/evrowe/er4' target='_blank'>Github</a>
              </p>
              <p>Hosted on <a href='//www.digitalocean.com' target='_blank'>Digital Ocean</a></p>
              <p>&copy;2016 Evan Rowe</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
