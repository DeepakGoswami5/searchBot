import React, { Component } from 'react';
import Cardlist from './components/cardlist/cardlist';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster:users}));
  }
  render() {
    return (
      <div className="App">
        <Cardlist monsters={this.state.monsters}/>
      </div>
    );
  }
  
}

export default App;
