import './App.css';
import React, { Component } from 'react'

export class Square extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div style= {squareStyle}>
        
      </div>
    )
  }
}


const squareStyle = {
  height: '50px',
  width: '50px',
  color: this.props.color,
}

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color:'red'
    }
  }
  render() {
    return (
      <div>
        <Square color={this.state.color} />
        <h1>test</h1>
      </div>
    )
  }
}

export default App

