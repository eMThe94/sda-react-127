import React from 'react';
import './App.css';

class App extends React.Component {
  intervalId;

  constructor() {
    super();

    this.state = {
      seconds: 0,
      decySeconds: 0,
      isActive: false
    };

    // Jezeli startStoper ma być funkcja obslugujaca event to
    // musimy przypisac "this" do tej funkcji
    // tak aby funkcja w momencie wywolania "wiedziala" czym jest "this"
    // this - to oczywiscie obiekt naszego komponentu
    this.startStoper = this.startStoper.bind(this);
    this.stopStoper = this.stopStoper.bind(this);
    this.resetStoper = this.resetStoper.bind(this);
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

  startStoper() {
    if (!this.isActive) {
      this.intervalId = setInterval(() => { this.tick() }, 100);
      this.setState((state, props) => {
        return {
          ...state,
          isActive: true
        }
      });
    }
  }

  stopStoper() {
    clearInterval(this.intervalId);
    this.setState((state, props) => {
      return {
        ...state,
        isActive: false
      }
    });
  }

  resetStoper() {
    this.setState(() => {
      return {
        seconds: 0,
        decySeconds: 0,
        isActive: false
      }
    });
  }

  render() {
    return (
      <div>
        {!this.state.isActive && <button onClick={this.startStoper}>Start</button>}
        {!this.state.isActive && <button onClick={this.resetStoper}>Reset</button>}
        {this.state.isActive && <button onClick={this.stopStoper}>Stop</button>}
        <div>{this.state.seconds} : {this.state.decySeconds}</div>
      </div>
    );
  }
}

export default App;
