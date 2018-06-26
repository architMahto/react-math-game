import React, { Component } from 'react';

import Answer from './Answer';
import Button from './Button';
import Stars from './Stars';

class Game extends Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
        <Stars />
        <Button />
        <Answer />
      </div>
    );
  }
}

export default Game;
