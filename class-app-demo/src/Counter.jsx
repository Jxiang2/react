import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
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
    console.log('Component did mount')
  }

  // like memo() to memoizes a component, and updates only when the following logic returns true
  // shouldComponentUpdate's priority is higher than state change
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.propToIgnore === nextProps.propToIgnore) {
      console.log("first check completed")
      if (nextState.counter !== this.state.counter) {
        console.log("second check completed")
        console.log('Should class component update - render')
        return true
      }
    }
    console.log('Should class component update - no render')
    return false
  }

  render = () => {
    console.log('Class child render')

    return (
      < div className="App">
        Class Counter: {this.state.counter}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        {this.props.propToIgnore}
      </ div>
    )
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(
      `Component did update with prev state ${prevState} and prev props ${prevProps}`
    )
  }

  componentWillUnmount = () => {
    console.log('Component will unmount')
  }
}