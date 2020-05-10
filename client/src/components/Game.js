import React from 'react';
import Board from './Board';

class Game extends React.Component {
  state = {
    data: '',
  };
  componentDidMount = () => {
    fetch('http://localhost:3000/here')
      .then((res) => res.text())
      .then((res) => this.setState({ data: res.split(' ') }));
  };

  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <p>
            The values are:{this.state.data[0]} and {this.state.data[1]}
          </p>
          <Board value={this.state.data} />
        </div>
        <div className='game-info'></div>
      </div>
    );
  }
}

export default Game;
