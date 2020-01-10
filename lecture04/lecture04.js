import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    let words = this.state.value.split(' ').filter(x => x);
    let numWords = words.length;

    const textareaStyle = {
      border: 'solid 1px black',
      height: '200px',
      width: '200px'
    };
    const textStyle = {
      fontSize: '25px'
    };
    if (numWords > 20) {
      textStyle.color = 'red';
    }

    return (
      <div className="App">
        <textarea
          style={textareaStyle}
          value={this.state.value}
          onChange={this.onChange}
        ></textarea>
        <p style={textStyle}>{numWords}/20</p>
      </div>
    );
  }
}

export default App;
