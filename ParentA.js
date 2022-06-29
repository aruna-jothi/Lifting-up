import React from "react";
import ChildA from "./ChildA";
class ParentA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  handleInput = (val) => {
    this.setState({
      username: val
    });
  };
  render() {
    return (
      <div>
        <h2>Parent Element A {this.state.username}</h2>
        <ChildA username={this.state.username} changeUser={this.handleInput} />
      </div>
    );
  }
}
export default ParentA;
