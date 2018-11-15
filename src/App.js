import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    }
  }

  handleButtonClick = () => {
    const clicked = this.state.clicked;
    this.setState({ clicked: clicked+1 })
    console.log('handleButtonClick called',{clicked})
  }

  notAnArrowFunction() {
    console.log('looks normal, but unfortunately "this" does not get set.')
    console.log({this: this})
  }

  isAnArrowFunction = () => {
    console.log('looks weird, with a better intro it will make more sense. Basically some magic happens so that "this" now gets set to be our App object, which has the setState() method on it.')
    console.log({this: this})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleButtonClick}>click me</button>
          <div>yeah it's been clicked like {this.state.clicked} times now</div>
          <div style={{color: 'gray'}}>
          <button onClick={this.notAnArrowFunction}>notAnArrowFunction()</button>
          <button onClick={this.isAnArrowFunction}>isAnArrowFunction()</button>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
