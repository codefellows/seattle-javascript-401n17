import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 8
    }
  }

  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}

export default Counter;
