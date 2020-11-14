import React from "react";

import { Route, Switch } from "react-router-dom";
import Header from "./header.js";
import Footer from "./footer.js";

import "./style.css";

import List from "./list.js";
import About from "./about.js";
import Help from "./help.js";

class App extends React.Component {
  render() {
    let stuff = ["soda", "juice", "sauce", "beans", "asldfkjdslfj"];
    let items = stuff.map((item) => <li key={Math.random()}>{item}</li>);

    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/fridge">
            <List items={stuff}>{items}</List>
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/help" component={Help} />
          <Route>
            <div>No idea what to do here...</div>
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
