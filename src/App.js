import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Proba from "./components/Proba/Proba"
import ProbaImg from "./components/ProbaImg/ProbaImg"

class App extends Component {
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
          <ProbaImg/>
            Learn React
          </a>
          <Proba/>
        </header>
      </div>
    );
  }
}

export default App;
