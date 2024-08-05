import React, { Component } from 'react'

export default class HandlerEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
          msg: 'Hello World!',
          msg2: '검정색 글씨',
          color: 'black',
          btnName: '사라져라',
          display: ''
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick() {
        this.setState({
            msg: this.state.msg === 'Hello World!' ? 'Goodbye World!' : 'Hello World!'
          
        });
    }
    handleClickColor = (e) =>{
        if (e === 'red') {
            this.setState({ msg2: '빨간색 글씨', color: 'red' });
          } else if (e === 'blue') {
            this.setState({ msg2: '파란색 글씨', color: 'blue' });
          }
        
    }
    handleClick2 = (e, e2) =>{
        if(e2 === ''){
            this.setState({display: 'none'})
        }else if(e2 === 'none'){
            this.setState({display: ''})
        }
        
        if(e === '보여라'){
            this.setState({btnName: '사라져라'})
        }else if (e === '사라져라'){
            this.setState({btnName: '보여라'})
        }
    }
  render() {
    return (
      <div>
        <h1>실습1</h1>
        <h2>{this.state.msg}</h2>
        <button onClick={this.handleClick}>버튼</button>

        <hr />

        <h1>실습2</h1>
        <h2 style={{color: this.state.color}}>{this.state.msg2}</h2>
        <button onClick={()=> this.handleClickColor("red")}>빨간색</button>
        <button onClick={()=> this.handleClickColor("blue")}>파란색</button>
        <hr />

        <h1>실습3</h1>
        <h2 style={{display: this.state.display}}>안녕하세요</h2>
        <button onClick={()=> this.handleClick2(this.state.btnName, this.state.display)}>{this.state.btnName}</button>
      </div>
    )
  }
}
