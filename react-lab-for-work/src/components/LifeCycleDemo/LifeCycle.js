import React, { Component } from "react";

export default class LifeCycle extends Component {
  state = {
    count: 1,
    character: {},
    disableButtons: false,
  };

  add = () => {
    // console.log(this);
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  subStract = () => {
    // console.log(this);
    this.state.count > 1 &&
      this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  getStarWarCharacter = (id) => {
    this.setState({ disableButtons: true });
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ character: data });
        this.setState({ disableButtons: false });
      });
  };

  componentDidMount() {
    this.getStarWarCharacter(this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("updated");
    if (prevState.count !== this.state.count) {
      this.getStarWarCharacter(this.state.count);
    }
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={this.subStract} disabled={this.state.disableButtons}>
            -
          </button>
          <h3>{this.state.count}</h3>
          <button onClick={this.add} disabled={this.state.disableButtons}>
            +
          </button>
        </div>

        <h3>{this.state.character?.name}</h3>
      </div>
    );
  }
}
