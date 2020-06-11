import React, {Component} from 'react'

export default class App extends Component {

  state = {
    count: 0,
    msgs: []
  }

  increment = () => {
    const number = this.select.value * 1
    const count = this.state.count
    this.setState({count: count + number})
  }

  decrement = () => {
    const number = this.select.value * 1
    const count = this.state.count
    this.setState({count: count - number})
  }

  incrementIfOdd = () => {
    const number = this.select.value * 1
    const count = this.state.count
    if (count % 2 === 1) {
      this.setState({count: count + number})
    }
  }

  incrementAsync = () => {
    
    const number = this.select.value * 1
  
    const count = this.state.count
 
    setTimeout(() => {
      this.setState({count: count + number})
    }, 1000)
  }

  addMsg = () => {
    const msgs = this.state.msgs
    const msg = this.input.value
    msgs.unshift(msg)
    this.setState({msgs})
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>
          &nbsp;
          <button onClick={this.decrement}>-</button>
          &nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          &nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
          &nbsp;
        </div>

        <hr/>

        <div>
          <input type="text" ref={input => this.input = input}/>
          <button onClick={this.addMsg}>add-message</button>
          <ul>
            {
              this.state.msgs.map((msg, index) => <li key={index}>{msg}</li>)
            }
          </ul>
        </div>

      </div>
    )
  }
}