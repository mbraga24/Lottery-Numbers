import React, { Component } from 'react';
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

class Lottery extends Component {
  // static defaultProps = {
  //   defaultNumbers = []
  // }
  constructor(props) {
    super(props)
    this.state = {
      num: []
    }

    this.createBalls = this.createBalls.bind(this)
    // this.generateNumbers = this.generateNumbers.bind(this)
  }

  generateNumbers(currentState) {
    for (var i = 0; i < this.props.numBalls; i++) {
      let newNumber = (Math.floor(Math.random() * this.props.maxNum) + 1)
        currentState.num.push(newNumber) 
    }
    return currentState.num
  }

  setToZero(currentState) {
    return { num: currentState.num = [] } 
  }

  generateBalls(currentState) {
    return { num: this.generateNumbers(currentState) }
  }

  createBalls() {
    this.setState(this.setToZero)
    this.setState(this.generateBalls)
  }

  render() {
    console.log(this.state.num)
    return (
      <div className="Lottery">
        <h2>{this.props.title}</h2>
        <LotteryBall winningNumbers={this.state.num}/>
        <button onClick={this.createBalls}>Generate New Numbers</button>
      </div>
    )
  }
}

export default Lottery;