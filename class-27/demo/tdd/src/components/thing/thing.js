import React from 'react';
import './thing.scss';

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stuff: true };
  }

  handleClick = e => {
    this.setState({ stuff: !this.state.stuff });
    console.log(this.state.stuff);
  };

  render() {
    return (
      <section className="thing">
        <span>Stuff: {this.state.stuff.toString()}</span>
        <button onClick={this.handleClick}>Click</button>
      </section>
    );
  }
}

export default Thing;
