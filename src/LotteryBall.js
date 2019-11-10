import React, { Component } from 'react';
import "./LotteryBall.css";

class LotteryBall extends Component {
  render() {

    let winningBalls = this.props.winningNumbers;

    return (
      <div className="LotteryBall">
         {
          winningBalls.map(number => (
            <div className="LotteryBall-balls">{number}</div>  
          ))  
         }
      </div>
      // <div>
      //   {
      //     winningBalls.map(number => (
      //       <div className="LotteryBall-balls">{number}</div>  
      //     ))  
      //   }
      // </div>
    )
  }
}

export default LotteryBall;