import React, { Component } from 'react';
import Display from './Display';

class App extends Component {
  render() {
    return (
    <div>
    <h2>Hi ,I am a React App</h2>
    <Display name='Samiksha' Age='20' Birthmonth='February'/>
    <Display name='Dhruv' Age='14' Birthmonth='January'/>
    <Display name='Samriti' Age='20' Birthmonth='June'/>
    <Display/>
      </div>
    );
  }
}

export default App;
