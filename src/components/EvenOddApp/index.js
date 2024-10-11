// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, currentNum: 0}

  onClick = () => {
    const randomNum = Math.floor(Math.random() * 101)
    this.setState(prevState => ({currentNum: prevState.currentNum + randomNum}))

    // const {currentNum} = this.state
    // if (currentNum % 2 === 0) {
    //   this.setState(prevState => ({isEven: true}))
    // } else {
    //   this.setState(prevState => ({isEven: false}))
    // }
  }

  render() {
    const {currentNum} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="count-heading">Count {currentNum}</h1>
          <p className="even-odd-heading">
            Count is {currentNum % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button className="btn-increase" onClick={this.onClick}>
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
