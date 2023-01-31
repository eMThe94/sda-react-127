import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seconds: 0
    };

    setInterval(() => { this.tick() }, 1000);
  }

  tick() {
    this.setState((state, props) => {
      return {
        seconds: state.seconds + 1
      };
    });
  }

  render() {
    return (
      <div>{this.state.seconds}</div>
    );
  }
}

export default App;
