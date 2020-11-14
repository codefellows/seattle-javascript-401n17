import React from "react";

class Fridge extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={Math.random}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default Fridge;
