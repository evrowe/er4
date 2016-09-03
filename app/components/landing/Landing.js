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
            <img
              src='img/hi-johnny.jpg'
              alt='Hey look, its Tommy Wiseau in a flower shop!'
              title='If you have not yet had the pleasure of seeing "The Room", you really need to change that as soon as possible.
              Get some friends together, find a local theater in town that does regular screenings, and go have a blast. The AV Club has
              a pretty good writeup of what you can expect. I strongly suggest you use your best Googling skills and look into it.'
              style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
