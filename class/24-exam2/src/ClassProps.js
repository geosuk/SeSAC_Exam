import React, { Component } from 'react';

class ClassProps extends Component {
  handleClick = () => {
    const { valid } = this.props;
    console.log(valid ? "유효" : "무효");
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <p>{text}</p>
        <button onClick={this.handleClick}>클릭 메시지</button>
      </div>
    );
  }
}

export default ClassProps;