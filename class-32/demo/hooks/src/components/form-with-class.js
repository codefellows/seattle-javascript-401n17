import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.values);
  }

  handleChange = (e) => {
    let values = {...this.state.values, [e.target.name]: e.target.value}
    this.setState({values});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="food" placeholder="Name a food" onChange={this.handleChange} />
        <input name="calories" type="number" onChange={this.handleChange} />
        <button type="submit">{this.props.john}</button>
      </form>
    )
  }
}

export default Form;
