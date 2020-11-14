import React from "react";

import { If, Then, Else, When, Case, Unless, Switch, Default } from "react-if";

class List extends React.Component {
  render() {
    return (
      <>
        <If condition={this.props.children.length > 3}>
          <Then>
            <div>Your fridge is full!</div>
          </Then>
          <Else>
            <div>You're getting there ...</div>
          </Else>
        </If>

        <When condition={this.props.children <= 0}>
          <div>Get to the store</div>
        </When>

        <Unless condition={this.props.items.includes("milk")}>
          <div>Go to the store and get some milk</div>
        </Unless>

        <Switch>
          <Case condition={this.props.children.length === 1}>
            <div>Yikes</div>
          </Case>
          <Case condition={this.props.children.length === 2}>
            <div>Eat Sparingly</div>
          </Case>
          <Case condition={this.props.children.length === 3}>
            <div>Have a snack</div>
          </Case>
          <Case condition={this.props.children.length === 4}>
            <div>Go Wild</div>
          </Case>
          <Default>
            <div>Not sure how you are doing?</div>
          </Default>
        </Switch>
      </>
    );

    // return <ul>{this.props.children}</ul>;
  }
}

export default List;
