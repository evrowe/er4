import React, { Component } from 'react';

class NotFound extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return(
      <div className='container main-content'>
        <div className='row'>
          <div className='column column-67 column-offset-16'>
            <h1>You found a big scary 404 Page!</h1>
            <p>Just kidding. It's really not that scary. It is really weird to think about the whole "being nowhere" thing though,
            you know? After all, even if you're "nowhere", that's still "somewhere", right? Because it isn't anywhere else.</p>
            <img
              src='/img/mindblown.jpg'
              alt='A cat whose entire concept of reality has been turned upside down'
              title='This cat has just watched everything it knows about life and the universe
              unravel faster than a ball of yarn at one of his yearly family gatherings.'
              style={{ width: '100%' }} />
            <p>Man, that's the kind of stuff that will keep you up at night.</p>
            <p>Don't panic, there are some things you can do about this perilous situation:</p>
            <p>
              <strong>⬅️ Try using that nifty back button that came with your browser.</strong>
              <br/>That usually works pretty well.</p>
            <p>
              <strong>👆 Try using one of the links in the header.</strong>
              <br/>Really useful for if the back button didn't work, or it brought you right back here again.</p>
            <p>
              <strong>☀️ Go outside</strong>
              <br/>Just take a break from computers for a while. Go read a book or take a jog or literally
              do anything other than spend more time on the internet.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
