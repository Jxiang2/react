import React, { Component } from "react";

export default class App extends Component {
  state = {
    helloMsg: "hello world",
  };

  handleHelloMessageChange(value) {
    this.setState({
      helloMsg: value,
    });
  }

  ar = 2;

  render() {
    return (
      <>
        <div>{this.state.helloMsg}</div>
        <input
          placeholder="enter some thing"
          value={this.state.helloMsg}
          onChange={(e) => this.handleHelloMessageChange(e.target.value)}
        />
      </>
    );
  }
}
