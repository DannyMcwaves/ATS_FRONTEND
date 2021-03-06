import React, { Component } from 'react';
import {WindowGridFluid} from "../lib/containers";
import Root from '../root/root';
import './App.scss';

class App extends Component {
  render() {
    return (
      <WindowGridFluid className="App">
        <Root/>
      </WindowGridFluid>
    );
  }

}

export default App;
