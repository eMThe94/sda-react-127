import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seconds: 0,
      decySeconds: 0
    };

    // Jezeli startStoper ma być funkcja obslugujaca event to
    // musimy przypisac "this" do tej funkcji
    // tak aby funkcja w momencie wywolania "wiedziala" czym jest "this"
    // this - to oczywiscie obiekt naszego komponentu
    this.startStoper = this.startStoper.bind(this);
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

  startStoper(){
    setInterval(() => { this.tick() }, 100);
  }

  render() {
    return (
    <div>
      <button onClick={this.startStoper}>Start</button>
      <div>{this.state.seconds} : {this.state.decySeconds}</div>
    </div>
    );
  }
}

export default App;
