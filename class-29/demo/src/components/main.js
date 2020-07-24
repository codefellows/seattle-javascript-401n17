import React from 'react';
import { Route } from 'react-router-dom';

import List from './list';
import Home from './home.js';

const Main = props => {
  let stuff = ['water', 'soda', 'milk', 'coffee', 'tea'];
  let items = stuff.map((item, i) => <li key={i}>{item}</li>);

  // The "links" in the navbar correspond to these routes
  // the clicked link shows
  // they can be declared as wrapped children or
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/stuff" render={() => <List>{items}</List>} />
    </main>
  );
};

export default Main;
