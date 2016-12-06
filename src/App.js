import React, { Component } from 'react';

import Social from './components/Social';

import './static/css/main.css';

class App extends Component {
  render() {
    return(
      <div>
        <div id="title">
          <h1 id="main_heading">React Boilerplate</h1>
        </div>
        <Social />
      </div>
    );
  }
}

export default App;
