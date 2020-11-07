import React from 'react';

import superagent from 'superagent';

class People extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      people: [],
      pets: ['Rocky', 'Malcom'],
      number: this.props.number
    }
  }

  async componentDidMount() {
    this.setState({fetching:true})
    const response = await superagent.get('https://swapi.dev/api/people/');
    const people = response.body.results || [];
    this.setState({people, fetching:false})
  }

  render() {
    return (
      <>
      <h2>{this.state.number}</h2>
      {this.state.fetching ? <div>Getting people ....</div> : ''}
      <ul>
        {
          this.state.people.map( (person, idx) => {
            return <li key={Math.random()}>{person.name}</li>
          })
        }
      </ul>

      <ul>
        {
          this.state.pets.map( (val, idx) => {
            return <li key={Math.random()}>{val}</li>
          })
        }
      </ul>
      </>
    )
  }

}

export default People;
