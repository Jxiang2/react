import React, { Component } from 'react'
import Counter from './Counter'
import FunctionCounter from './FunctionCounter'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mount: true,
      propToIgnore: 0,
      num: 0,
      initializing: true
    }

    this.adder = () => this.setState({ num: this.state.num + 1 })
    this.mountCounter = () => this.setState({ mount: true })
    this.unmountCounter = () => this.setState({ mount: false })
    this.propToIgnore = () => this.setState({ propToIgnore: 10 })
  }

  componentDidMount() {
    setTimeout(() => this.setState({ initializing: false }), 500)
  }

  render() {
    console.log('parent rendered')

    if (this.state.initializing) {
      return <p>Initialzing App...</p>
    }

    return (
      <div>
        <button onClick={this.adder}>{this.state.num}</button>

        <button disabled={this.state.mount} onClick={this.mountCounter}>
          mountCounter
        </button>

        <button disabled={!this.state.mount} onClick={this.unmountCounter}>
          unmountCounter
        </button>

        <button style={{ marginBottom: '20px' }} onClick={this.propToIgnore}>
          Change propToIgnore
        </button>

        {this.state.mount
          ? <Counter propToIgnore={this.state.propToIgnore} />
          : null}

        {this.state.mount
          ? <FunctionCounter propToIgnore={this.state.propToIgnore} />
          : null}
      </div>
    )

  }
}
