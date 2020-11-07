import React from 'react';

import Kid from './kid.js';
import People from './people.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 100
    }
  }

  withdraw = (amount) => {
    this.setState({ balance: this.state.balance - amount})
  }

  deposit = () => {}

  render() {
    return(
      <> {/* this is the <App /> */}
        <h1 data-testid="balanceHeader">Bank Balance Is: ${this.state.balance}</h1>
        <hr />
        <Kid spend={this.withdraw} name="Zach" balance={this.state.balance} />
        <hr />
        <People number={12} />
      </>
    )
  }
}


export default App;
