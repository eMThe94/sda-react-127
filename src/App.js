import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seconds: 0,
      decySeconds: 0
    };

    setInterval(() => { this.tick() }, 100);
  }

  tick() {
    this.setState((state, props) => {
      let decySeconds = state.decySeconds + 1;
      let seconds = state.seconds;

      if (decySeconds === 10) {
        seconds++;
        decySeconds = 0;
      }

      return {
        decySeconds: decySeconds,
        seconds: seconds
      };
    });
  }

  render() {
    return (
      <div>{this.state.seconds} : {this.state.decySeconds}</div>
    );
  }
}

export default App;
