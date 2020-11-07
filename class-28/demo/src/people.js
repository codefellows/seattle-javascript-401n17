import React from "react";
import If from "./if.js";

export default class People extends React.Component {
  render() {
    console.log(this.props.children.length);

    return (
      <>
        <If condition={this.props.children.length > 4}>
          <div>Too Many</div>
        </If>
        <If condition={this.props.children.length <= 4}>
          {this.props.children}
        </If>
      </>
    );

    // if more than 4 children, do something different

    //   return this.props.children.length <= 4 ? (
    //     <div>{this.props.children}</div>
    //   ) : (
    //     <div>Too many people!</div>
    //   );
  }
}
