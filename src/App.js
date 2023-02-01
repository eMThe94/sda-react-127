import React from 'react';
import RoundsList from './RoundsList';
import Stoper from './Stoper';

class App extends React.Component {
  intervalId;

  constructor() {
    super();

    this.state = {
      seconds: 0,
      decySeconds: 0,
      isActive: false,
      rounds: [],
      users: [],
      userName: ''
    };

    // Jezeli startStoper ma być funkcja obslugujaca event to
    // musimy przypisac "this" do tej funkcji
    // tak aby funkcja w momencie wywolania "wiedziala" czym jest "this"
    // this - to oczywiscie obiekt naszego komponentu
    this.startStoper = this.startStoper.bind(this);
    this.stopStoper = this.stopStoper.bind(this);
    this.resetStoper = this.resetStoper.bind(this);
    this.addRound = this.addRound.bind(this);
    this.onUserInputChange = this.onUserInputChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    console.log("SIEMKACOSTAM");
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
        isActive: false,
        rounds: [],
        userName: '',
        users: []
      }
    });
  }

  addRound() {
    this.setState((state) => {
      return {
        ...state,
        rounds: [
          ...state.rounds,
          {
            decySeconds: state.decySeconds,
            seconds: state.seconds
          }
        ]
      }
    });
  }

  addUser() {
    this.setState((state) => {
      return {
        ...state,
        users: [
          ...state.users,
          {
            userName: state.userName,
            decySeconds: state.decySeconds,
            seconds: state.seconds
          }
        ]
      }
    });
  }

  onUserInputChange(event) {
    this.setState((state) => {
      return {
        ...state,
        userName: event.target.value
      };
    })
  }

  render() {
    const usersList = this.state.users.map((user, idx) => {
      return <li key={idx}>{user.userName} - {user.seconds} : {user.decySeconds}</li>
    });

    return (
      <div>
        {!this.state.isActive && <button onClick={this.startStoper}>Start</button>}
        {!this.state.isActive && <button onClick={this.resetStoper}>Reset</button>}
        {this.state.isActive && <button onClick={this.stopStoper}>Stop</button>}
        {this.state.isActive && <button onClick={this.addRound}>Add round</button>}
        {!this.state.isActive && <input value={this.state.userName} onChange={this.onUserInputChange}></input>}
        {!this.state.isActive && <button onClick={this.addUser}>Add user</button>}
        <div>{this.state.seconds} : {this.state.decySeconds}</div>
        <RoundsList rounds={this.state.rounds}></RoundsList>
        <h1>Leaderboard</h1>
        <ol>
          {usersList}
        </ol>

        <Stoper name="Szymon"></Stoper>
      </div>
    );
  }
}

export default App;
