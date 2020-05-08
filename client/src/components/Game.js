import React from 'react';
import Board from './Board';
import axios from 'axios';

class Game extends React.Component {
  state = {
    data: '',
  };
  componentDidMount = () => {
    fetch('http://localhost:3000/here')
      .then((res) => res.text())
      .then((res) => this.setState({ data: res }));
  };

  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <p>{this.state.data}</p>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
