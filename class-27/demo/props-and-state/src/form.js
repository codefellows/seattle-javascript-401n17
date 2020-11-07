import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { amount: null }
  }

  handleChange = (e) => {
    let amount = e.target.value;
    this.setState({ amount })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // <Zach spend={someFunction} />
    // this.props.xxxxxx = whatever things we added to the component call
    this.props.spend(this.state.amount);
  }

  render() {
    return (
      <> {/* this is the <Form /> or C3 from our drawing */}
        <form data-testid="spendForm" onSubmit={this.handleSubmit}>
          <input data-testid="moneyInput" type="number" name="amount" onChange={this.handleChange} />
          <button type="submit">Buy Something, You have {this.props.balance} remaining</button>
        </form>
      </>
    )
  }

}


export default Form;
