import React from 'react';
import Board from './Board';
import axios from 'axios';

class Game extends React.Component {
  state = {
    data: '',
  };
  componentDidMount = () => {
    // Make sure to change the (localhost) on the line bellow
    // to the public DNS of your EC2 instance
    axios.get('http:localhost:3001/here').then((res) => {
      console.log('res::::::::: ', res);
      const dataFromServer = res.data;
      this.setState({ data: dataFromServer });
    });
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
