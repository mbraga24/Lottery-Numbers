import React, { Component } from 'react'
import Lottery from "./Lottery";
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Lottery /> 
      <Lottery title={"Mini Daily"} numBalls={4} maxNum={10} /> 
    </div>
    )
  }
}

export default App;
