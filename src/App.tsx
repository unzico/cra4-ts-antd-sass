import React, { Component } from "react";
import { Button } from "antd";
import logo from "./logo.svg";
import "./App.sass";

import { NestedComponent } from "./components/NestedComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button type="primary" size="large">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NestedComponent>Learn React</NestedComponent>
            </a>
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
