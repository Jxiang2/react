import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.increment = () => this.setState({ counter: this.state.counter + 1 })
    this.decrement = () => this.setState({ counter: this.state.counter - 1 })
  }

  // handlers
  handleIncrement = () => {
    this.increment()
  }

  handleDecrement = () => {
    this.decrement()
  }

  // invoked right after render
  componentDidMount = () => {
    console.log("component did mount")
  }

  // like memo() to memoizes a component, and updates only when the following logic returns true
  // shouldComponentUpdate's priority is higher than state change
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.propToIgnore === nextProps.propToIgnore) {
      if (nextState.counter !== this.state.counter) {
        console.log("Should component update - render")
        return true
      }
    }
    console.log("Should class component update - no render")
    return false
  }

  render = () => {
    console.log("class child render")

    return (
      < div className="App" >
        Class Counter: {this.state.counter}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        {this.props.propToIgnore}
      </ div>
    )
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("Component did update, the prev state is", prevState, "and the prev props is ", prevProps)
  }

  componentWillUnmount = () => {
    console.log("Component will unmount")
  }
}