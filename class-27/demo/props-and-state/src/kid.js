import React from 'react';

import Form from './form.js';

// let zach = new Zach({spend:this.withdra, age: 21, name: 'z-man'})
class Kid extends React.Component {
  render() {
    return (
      <> {/* this is the <Kid />  or C1 from our drawing */}
        <h2 data-testid="kidName">{this.props.name} Component</h2>
        <Form spend={this.props.spend} balance={this.props.balance} />
      </>
    )
  }
}


export default Kid;
