import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

export default App;
