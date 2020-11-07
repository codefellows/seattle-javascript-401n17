import React from "react";

import People from "./people.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <People>
          <div>John</div>
          <div>Cat</div>
          <div>Zach</div>
          <div>Allie</div>
        </People>
      </>
    );
  }
}
