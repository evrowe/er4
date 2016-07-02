import React, { Component } from 'react';

class Landing extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <h2 id='title'>Oh hi Johnny I didn't know it was you.</h2>
            <p>You're my favorite customer.</p>
            <img src='img/hi-johnny.jpg' style={{width: '100%'}} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
