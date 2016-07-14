// Entry point
import React, { Component, PropTypes } from 'react';

// App Global Styles
import './global.css';

// Compronents
import Footer from './shared/footer/Footer';
import Header from './shared/header/Header';

class App extends Component {

  // Prop Validations + Defaults | Default State
  // ---------------------------------------------------------------------------
  static propTypes = {
    children: PropTypes.node
  }

  // Render
  // ---------------------------------------------------------------------------
  render() {
    return (
      <main className='o-hi-mark'>
        <Header />
          <div className='youre-my-best-friend'>
            {this.props.children}
          </div>
        <Footer />
      </main>
    );
  }
}

export default App;
