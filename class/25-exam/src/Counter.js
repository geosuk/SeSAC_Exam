import React, { Component } from 'react'

export default class Counter extends Component {
       state = {
        count : 0
      }
      click2 = () => {
        this.setState(prevState => ({ count: prevState.count + 2 }));
      };
    
      // -1 버튼 클릭 시 숫자가 1씩 감소
      click1 = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }));
      };
  render() {
    const {count} = this.state;
    return (
        
      <div>
        <h1>{count}</h1>
        <button onClick={this.click2}>+2</button>
        <button onClick={this.click1}>-1</button>
      </div>
    )
  }
}
