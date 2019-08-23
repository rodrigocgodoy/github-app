import React, { Component } from 'react';
import Favicon from 'react-favicon';

import Routes from './routes';
import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Favicon url="../public/github_logo.ico" />
        <Routes/>
      </div>
    );
  }
}

export default App;
