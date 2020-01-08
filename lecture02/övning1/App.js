import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.onInput = this.onInput.bind(this);
  }

  onInput(value) {
    this.setState({ name: value });
  }

  render() {
    return <div className='app'>
      <UserInput value={this.state.name} onInput={this.onInput} />
      <UserName value={this.state.name} />
    </div>;

  }
}

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.onInput = this.onInput.bind(this);

  }
  onInput(e) {
    this.props.onInput(e.target.value);
  }
  render() {
    return <form className='userInput' onInput={this.onInput}>
      <input ></input >
    </form>

  }
}


class UserName extends React.Component {
  render() {
    return <h1 id='userName'>Hello {this.props.value}</h1>;
  }
}


export default App;
