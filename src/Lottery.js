import React, { Component } from 'react';
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
      title: "Lotto",
      numBalls: 6,
      maxNum: 40
  };

  constructor(props) {
    super(props)
    this.state = {
      num: Array.from({ length: this.props.numBalls })
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // generateNumbers(currentState) {
  //   return { currentState.num.map( n => Math.floor(Math.random() * this.props.maxNum) + 1 }
  // }

  generate() {
    this.setState(currentState => ({
      num: currentState.num.map( 
        n => Math.floor(Math.random() * this.props.maxNum) + 1 
      )
    }));
  }

  handleClick() {
    this.generate()
  }

  render() {
    
    return (
      <div className="Lottery">
        <h2>{this.props.title}</h2>
        <div className="Lottery-container">
          {
            this.state.num.map(number => (
              <LotteryBall num={number}/>
            ))
          }
        </div>
        <button onClick={this.handleClick}>Generate New Numbers</button>
      </div>
    )
  }
}

export default Lottery;