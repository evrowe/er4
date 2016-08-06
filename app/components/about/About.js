import React, { Component } from 'react';

class About extends Component {

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return(
      <div className='container main-content'>
        <div className='row'>
          <div className='column column-67 column-offset-16'>
            <h2>Evan: A High-Level Overview</h2>
            <p>I am a javascript-focused web developer, living in Portland, OR. I take pride in my ability to create living web experiences that bring joy to their users and owners alike.</p>
            <p>I am well versed in modern web standards like <b>HTML5</b> and <b>CSS3</b>*. They are more than just buzzwords (but barely). I spent many years in a serious relationship with <b>jQuery</b>; we remain close friends who talk often.</p>
            <p>Nowadays, I've given my heart to building web applications in <b>Ember</b> and <b>React</b>. Previously my energy was focused on creating traditional informational sites driven by popular CMS platforms like <b>ExpressionEngine</b> and <b>WordPress</b>. I don't see those two as often anymore but we've been known to get together and make some magic from time to time.</p>
            <p>Do not ask me about Magento or anything e-commerce releated; if that's what you want, I am not your guy, and we probably aren't going to get along super well. First impressions are important, don't blow it.</p>
            <h2>My Background</h2>
            <p>I hold a BFA in Graphic Design from Oregon State Univeristy, combined with eight years of professional experience in design and development for the web. This gives me the unique ability to bring an interdisciplinary knowledge to the practice and ensure both the design and development sides of the creative exercise are well-informed by the requirements, abilities and limitations of each.</p>
            <p>Outside of work, I enjoy the following (in no particular order)</p>
            <ul>
              <li>☕️ Drinking coffee (preferably <a href='//ristrettoroasters.com' target='_blank'>Ristretto Roasters</a>, <a href='//www.heartroasters.com' target='_blank'>Heart</a> or <a href='//www.wateravenuecoffe.com' target='_blank'>Water Ave.</a>)</li>
              <li>🌲 Attending/watching Portland Timbers games</li>
              <li>🕹 Video games</li>
              <li>🏃 Running</li>
              <li>⚽️ Playing indoor soccer</li>
              <li>🏡 Working on my home and yard</li>
              <li>🍖 Cooking and eating delicious things (e.g. ramen burgers)</li>
            </ul>
            <sub>*Well, technicaly I write mostly in <b>JSX</b>, <b>Handlebars</b> and <b>SCSS</b> now, but you get the idea.</sub>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
