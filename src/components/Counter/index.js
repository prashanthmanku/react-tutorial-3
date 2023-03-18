import {Component} from 'react'
import './index.css'
let countValue
let color
let countV = JSON.parse(localStorage.getItem('count'))
if (countV === null) {
  countValue = 0
} else {
  countValue = countV
}

class Counter extends Component {
  state = {count: countValue}
  onIncrement = () => {
    this.setState(prevState => {
      const countingValue = prevState.count + 1
      if (countingValue > 0) {
        color = 'green'
      } else if (countingValue < 0) {
        color = 'red'
      } else {
        color = 'black'
      }

      localStorage.setItem('count', JSON.stringify(countingValue))
      return {count: countingValue}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      const countingValue = prevState.count - 1
      localStorage.setItem('count', JSON.stringify(countingValue))
      if (countingValue > 0) {
        color = 'green'
      } else if (countingValue < 0) {
        color = 'red'
      } else {
        color = 'black'
      }

      return {count: countingValue}
    })
  }
  onReset = () => {
    localStorage.setItem('count', '0')
    color = 'black'
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className={`count ${color}`}>{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onReset}>
            Reset
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
