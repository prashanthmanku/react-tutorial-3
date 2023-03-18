import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>hello, {name}</h1>
  }
}

export default Welcome
