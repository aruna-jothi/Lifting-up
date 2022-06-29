import React from "react";
class ChildA extends React.Component {
  constructor(props) {
    super(props);
  }
  inputChange = (e) => {
    this.props.changeUser(e.target.value);
  };

  render() {
    return (
      <div>
        <label>Input</label>
        <input
          type="text"
          value={this.props.username}
          onChange={this.inputChange}
        />
        <h2>Child Element A {this.props.username}</h2>
      </div>
    );
  }
}
export default ChildA;
