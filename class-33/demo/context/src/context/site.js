import React from 'react';

export const SiteContext = React.createContext();

class SiteProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'My Website',
      twitter: 'dailydoseofcode',
      numberPerPage: 3,
      showCompleted: false,
      changeTitleTo: this.changeTitle,
      changeTwitterTo: this.changeTwitter,
    }
  }

  changeTitle = (title) => {
    this.setState({title})
  };

  changeTwitter = (twitter) => {
    this.setState({twitter})
  };

  render() {
    // .Provider makes the object in "value" available to any child component in the whole tree
    // Effectively, this "is" the cloud
    return (
      <SiteContext.Provider value={this.state}>
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}

export default SiteProvider;
