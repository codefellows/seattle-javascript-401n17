import React from 'react';

import './app.scss';

import Thing from './components/thing/thing.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Thing />
      </React.Fragment>
    );
  }
}

export default App;
