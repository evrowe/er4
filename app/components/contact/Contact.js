import React, { Component } from 'react';

class Contact extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return(
      <div className='container main-content'>
        <div className='row'>
          <div className='column column-67 column-offset-16'>
            <h2>How to Reach Me</h2>
            <ul className='no-bullet'>
              <li><a href='//www.twitter.com/ev_rowe' target='_blank'>@ev_rowe</a></li>
              <li><a href='//www.github.com/evrowe' target='_blank'>GitHub</a></li>
              <li><a href='//www.linkedin.com/in/evrowe' target='_blank'>LinkedIn</a></li>
              <li><a href='//www.instagram.com/ev_rowe' target='_blank'>Instagram</a></li>
              <li>er[at]evan-rowe[dot]com</li>
            </ul>
            <p><a href='./evan-rowe-resume-web.pdf'>My Resume</a>, for those interested.</p>
            <h2>Some Folks I Like</h2>
            <p>I've had the pleasure of working with some pretty excellent people over the years. While it's impractical to list them all, these are the some of the ones who left a lasting impression.</p>
            <ul className='no-bullet'>
              <li><a href='//www.danhedgecock.com' target='_blank'>Dan Hedgecock</a></li>
              <li><a href='//www.github.com/bigmoves' target='_blank'>Chad Miller</a></li>
              <li><a href='//www.vikingglory.com' target='_blank'>Rocky Neurock</a></li>
              <li><a href='//www.departmentofdigitalwizardry.com' target='_blank'>Patrick Walsh</a></li>
              <li><a href='//www.spaceninja.com' target='_blank'>Scott Vandehey</a></li>
              <li><a href='//www.dabealan.com' target='_blank'>Dabe Alan</a></li>
              <li><a href='//www.spokebranding.com' target='_blank'>Brian Kerr</a></li>
              <li><a href='//www.youfoundashley.com' target='_blank'>Ashley Pieren</a></li>
            </ul>
          </div>
          <div className='column column-33'></div>
        </div>
      </div>
    );
  }
}

export default Contact;
